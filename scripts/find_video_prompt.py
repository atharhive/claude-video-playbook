#!/usr/bin/env python3
"""
Find Video Prompt CLI Helper
Searches the curated database of 703 viral video prompts created with Claude Opus 5.5.
"""

import sys, json, os, argparse
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent
DATA_FILE = BASE_DIR / "skills" / "opus-video-prompts" / "videos.json"
PROMPTS_DIR = BASE_DIR / "skills" / "opus-video-prompts" / "prompts"

def search_prompts(query, category=None, limit=5):
    if not DATA_FILE.exists():
        print(f"Error: Prompt database not found at {DATA_FILE}")
        sys.exit(1)

    with open(DATA_FILE, "r", encoding="utf-8") as f:
        data = json.load(f)

    q = query.lower()
    matches = []

    for item in data:
        cat = item.get("category", "")
        if category and category.lower() != cat.lower():
            continue

        author = item.get("author", "")
        tech = " ".join(item.get("stack", [])) if isinstance(item.get("stack"), list) else str(item.get("stack", ""))
        slug = item.get("slug", "")

        score = 0
        if q in cat.lower(): score += 5
        if q in author.lower(): score += 5
        if q in tech.lower(): score += 3
        if q in slug.lower(): score += 2

        p_file = PROMPTS_DIR / f"{slug}.md"
        if p_file.exists():
            content = p_file.read_text(encoding="utf-8", errors="ignore").lower()
            if q in content: score += 10

        if score > 0:
            matches.append((score, item, p_file))

    matches.sort(key=lambda x: -x[0])
    return matches[:limit]

def main():
    parser = argparse.ArgumentParser(description="Search 703+ viral video prompts and code recipes.")
    parser.add_argument("query", nargs="*", help="Keywords to search (e.g. 'kinetic typography', '3d', 'particles')")
    parser.add_argument("--category", "-c", choices=["motion", "3d", "explainer", "interactive"], help="Filter by category")
    parser.add_argument("--limit", "-n", type=int, default=5, help="Maximum number of results to display")

    args = parser.parse_args()
    q_str = " ".join(args.query).strip()

    if not q_str:
        parser.print_help()
        sys.exit(0)

    results = search_prompts(q_str, category=args.category, limit=args.limit)
    print(f"Found {len(results)} matching video prompts for '{q_str}':\n")

    for score, item, p_file in results:
        author = item.get("author", "")
        cat = item.get("category", "video").upper()
        stack = item.get("stack", "Code")
        print(f"[{cat}] @{author} ({stack})")
        print(f"  Source: {p_file}")
        if p_file.exists():
            lines = p_file.read_text(encoding="utf-8", errors="ignore").splitlines()
            body_lines = [l for l in lines if not l.startswith("#") and not l.startswith("[") and l.strip()]
            snippet = " ".join(body_lines[:2]).strip()
            if snippet:
                print(f"  Snippet: {snippet[:120]}...")
        print("-" * 50)

if __name__ == "__main__":
    main()
