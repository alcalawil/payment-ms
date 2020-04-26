# Express + Typescript API

### Usage Dev

- `npm i`
- Create file `./env/development.env`
- `npm start`

### Usage Prod

- `npm i --production`
- Create file `./env/production.env`
- `npm start`

### Docker

- `docker build -t express-api-ts:1.0.0 .`
- `docker run -it -d --env-file ./env/production.env -p 3000:3000 express-api-ts:1.0.0`

### REST Client

```
# Healt Check
curl --request GET \
  --url http://localhost:3000/v1/system/status
```

### TODO:

- Fix Dockerfile (post compile error)
- Add production logger transport (winston)
- Add eslint config
- Add mongodb connection
- Add tests engine
