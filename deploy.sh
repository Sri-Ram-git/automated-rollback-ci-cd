#!/bin/bash

echo "Building latest image..."
docker build -t rollback-app:latest .

echo "Deploying..."
docker compose down || true
docker compose up -d

echo "Done"