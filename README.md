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

(Add screenshot: green workflow run)<img width="1910" height="1138" alt="Screenshot 2026-10-20 170859" src="https://github.com/user-attachments/assets/821f5725-9eae-4996-b03b-7416df77ebdd" />
<img width="1911" height="1115" alt="Screenshot 2026-10-20 170927" src="https://github.com/user-attachments/assets/439aa998-33b3-428f-927a-3f5eed0232fd" />
<img width="1907" height="1065" alt="Screenshot 2026-10-20 171005" src="https://github.com/user-attachments/assets/5ce77a8e-1218-4dda-a905-3cf074d3bf1e" />
<img width="1917" height="1136" alt="Screenshot 2026-10-20 171029" src="https://github.com/user-attachments/assets/304449f4-874e-4cc7-9427-98252228b1a8" />
<img width="1917" height="1031" alt="Screenshot 2026-10-20 171044" src="https://github.com/user-attachments/assets/22783c54-6530-4607-b2a2-6d87e07b2251" />

