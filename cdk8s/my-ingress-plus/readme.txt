Remove the security part
add a host

The above changes can be find in ingress-plus.k8s-changed.yaml


curl --resolve "hello-world.info:80:$( minikube ip )" -i http://hello-world.info

make sure nginx controller is running
kubectl get pods -n ingress-nginx

or enable information
minikube addons enable ingress

for more information visit
https://kubernetes.io/docs/tasks/access-application-cluster/ingress-minikube/
