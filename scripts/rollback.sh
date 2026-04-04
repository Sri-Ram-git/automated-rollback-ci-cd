#!/bin/bash

echo "Rolling back to stable version..."

docker tag rollback-app:stable rollback-app:latest

docker-compose down || true
docker-compose up -d

echo "Rollback complete"