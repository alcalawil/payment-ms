# Payment microservice for Venezuela

### Usage Dev

- `npm i`
- Create file `./env/development.env`
- `npm start`


### Docker

- `docker build -t payment-ms:1.0.0 .`
- `docker run -it -d --env-file ./env/production.env -p 3000:3000 payment-ms:1.0.0`
- To copy into minikube `docker save payment-ms:1.0.0 | (eval $(minikube docker-env) && docker load)`


### REST Client

```
# Healt Check
curl --request GET \
  --url http://localhost:3000/v1/system/status
```

### TODO:

- Create a tsconfig-prod.json
- Add production logger transport (winston)
- Add eslint config
- Add mongodb connection
- Add tests engine
