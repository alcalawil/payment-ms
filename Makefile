default: create-kube

create-kube:
	kubectl create configmap payment-config --from-env-file=./env/prouction.env -n dev
	kubectl apply -f ./k8s/deployment.yaml -n dev
	kubectl apply -f ./k8s/service.yaml -n dev
	kubectl apply -f ./k8s/ingress.yaml -n dev

check:
	kubectl logs pod/app -n dev

clean-kube:
	kubectl delete deployments/payment-deployment -n dev
	kubectl delete configmaps/payment-config -n dev
	kubectl delete services/payment-service -n dev
	kubectl delete ingress/payment-ing -n dev
	# kubectl delete namespace/dev -n dev