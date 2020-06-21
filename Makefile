default: create-kube

create-kube:
	kubectl create configmap env-vars --from-env-file=./env/development.env -n dev
	kubectl apply -f ./k8s/deployment.yaml -n dev
	kubectl apply -f ./k8s/service.yaml -n dev
	kubectl apply -f ./k8s/ingress.yaml -n dev

check:
	kubectl logs pod/app -n dev

clean-kube:
	kubectl delete deployments/payment-deployment -n dev
	kubectl delete configmaps/env-vars -n dev
	kubectl delete ingress/payment-ing -n dev
	# kubectl delete namespace/dev -n dev