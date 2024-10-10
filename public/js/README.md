# harness pipelines 101

Here are a few instructions to help you get started for the harness CD pipelines demo

1. Install Docker Desktop: https://www.docker.com/products/docker-desktop/
2. Install k3d: https://k3d.io/v5.7.2/
3. Once you installed k3d create a cluster and map port 8081 to 80

   `k3d cluster create mycluster --api-port 6550 -p "8081:80@loadbalancer"`

4. Fork this repo you will need the helm chart for the demo
5. You can also find the slides for demo in this repo as well
