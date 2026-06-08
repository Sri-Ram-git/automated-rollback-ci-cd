# 🚀 Automated Rollback DevOps Project

## 📌 Objective
Automatically rollback to previous version if deployment fails.

## ⚙️ Tech Stack
- Node.js
- Docker
- GitHub Actions

## 🔁 Workflow
1. Push code to GitHub
2. GitHub Actions builds Docker image
3. Deploys container
4. Runs health check
5. If failed → rollback to previous version

## 🚀 Installation & Setup

Follow the steps below to set up and run the project on your local machine.

### Prerequisites

Ensure the following software is installed:

- Git
- Docker Desktop
- Node.js (v18 or above)
- GitHub Account

Verify installation:

```bash
git --version
docker --version
node --version
```

---

## 📥 Clone the Repository

```bash
git clone https://github.com/Sri-Ram-git/automated-rollback-ci-cd.git

cd automated-rollback-ci-cd
```

---

## 📦 Install Dependencies

```bash
npm install
```

or

```bash
npm install express
```

---

## 🐳 Build Docker Image

```bash
docker build -t rollback-app:latest .
```

---

## ▶️ Run Application Using Docker Compose

```bash
docker compose up -d
```

Check running containers:

```bash
docker ps
```

---

## 🌐 Access the Application

Open a browser and visit:

```text
http://localhost:3000
```

Expected Output:

```text
Version 1 - App is Working
```

---

## 💥 Simulate Failure

To test the rollback mechanism, trigger the crash endpoint:

```text
http://localhost:3000/crash
```

or

```bash
curl http://localhost:3000/crash
```

This intentionally crashes the application.

---

## ⚙️ Running the CI/CD Pipeline

The pipeline is automatically triggered whenever code is pushed to the `main` branch.

### Push Changes

```bash
git add .

git commit -m "Update application"

git push origin main
```

---

## 🔍 View Workflow Execution

Navigate to:

```text
GitHub Repository → Actions Tab
```

There you can monitor:

- Docker Image Build
- Application Deployment
- Health Check Execution
- Failure Detection
- Rollback Process
- Rollback Verification

---

## ✅ Successful Deployment

Workflow Output:

```text
Build Docker Image ✔
Deploy Application ✔
Health Check ✔
```

Application Response:

```text
Version 1 - App is Working
```

---

## ❌ Failed Deployment

When the crash endpoint is triggered:

```text
curl: (52) Empty reply from server
```

The workflow detects failure automatically.

---

## 🔁 Rollback Verification

Workflow Output:

```text
Rollback Triggered...
```

Verification:

```text
Version 1 - App is Working
```

This confirms that the previous stable version has been restored successfully.

---

## 🛑 Stop the Application

```bash
docker compose down
```

---

## 🧹 Remove Containers and Images

```bash
docker compose down

docker image rm rollback-app:latest
```

This cleans up all project resources from the local machine.

## 🎯 Output
- Automatic failure detection
- Zero manual rollback

## 📸 Demo Idea
Show:
- Successful deployment
- Failed deployment
- Auto rollback logs

---

🔥 This project demonstrates real-world DevOps reliability engineering.
