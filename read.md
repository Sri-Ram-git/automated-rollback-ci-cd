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

## 🧪 How to Test

### Step 1: Run normally
- App shows: "Version 1 - Working"

### Step 2: Break app
Uncomment crash code in app.js

### Step 3: Push again
- Pipeline fails
- Rollback triggers

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
