# Job Tracker

Full-stack job application tracker: static frontend (nginx), Node/Express API, MongoDB.

## Run
```bash
cp .env.example .env
docker compose up --build
```
Open http://localhost:3000

## Task 2: Containerization
- Multi-stage Dockerfiles for backend (deps -> slim runtime, non-root user) and frontend (build -> nginx).
- Secrets/config via `.env` (git-ignored), injected with `env_file`.
- Port map: frontend 3000->80, backend 5000->5000, MongoDB internal only.
- Mongo data persisted in a named volume.

(Add screenshots: running app, `docker images`)

## Task 3: CI/CD
GitHub Actions (`.github/workflows/ci.yml`) runs on every push: checkout, install, lint, unit tests, docker build, deployment summary.

(Add screenshot: green workflow run)
