# Contributing Guidelines

Contributions to the Claude Video Playbook are welcome. Follow these principles to keep all pipelines production-grade, reproducible, and cleanly tested.

## Development Setup

```bash
# Clone the repository
git clone https://github.com/atharhive/claude-video-playbook.git
cd claude-video-playbook

# Setup Python virtual environment
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt

# Setup Node.js dependencies for Remotion
cd examples/01-claude-launch
npm install
```

## Pull Request Workflow

1. Fork the repository and create your branch from `main`.
2. Ensure zero emojis and zero em dashes across all code, commits, and documentation.
3. Validate all pipeline scripts locally before opening a pull request.
4. Verify no secret tokens or credentials exist in commit diffs.

## Maintainer Response SLA

All pull requests, questions, and discussions receive maintainer review within a strict 24-hour SLA.
