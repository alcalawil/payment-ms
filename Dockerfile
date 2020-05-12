
# Building stage
FROM node:12.14.1 AS builder
WORKDIR /app
COPY ./src ./src
# TODO: Use tsconfig-prod.json
COPY tsconfig.json .
COPY ./util/build.js  ./util/build.js
COPY package*.json ./
RUN npm install
RUN npm run build
# ---

# production stage

FROM node:12.14.1-alpine
WORKDIR /app
COPY --from=builder ./app/dist ./dist
COPY package*.json ./
RUN npm install --production
USER node
ENV NODE_ENV production
CMD [ "npm", "run", "start:prod" ]