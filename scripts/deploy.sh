#!/bin/bash

echo "Building latest image..."
docker build -t rollback-app:latest .

echo "Deploying using docker-compose..."
docker-compose down || true
docker-compose up -d

echo "Deployment done"