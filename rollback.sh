
#!/bin/bash

echo "🚨 Deployment failed! Rolling back..."

docker stop myapp || true
docker rm myapp || true

docker run -d -p 3000:3000 --name myapp myapp:previous

echo "✅ Rollback completed!"