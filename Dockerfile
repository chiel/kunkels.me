# build phase
FROM node:9.2.0-alpine as builder

WORKDIR /code

COPY yarn.lock .
COPY package.json .

RUN yarn

COPY . .

RUN yarn lint
RUN NODE_ENV=production yarn build

# run phase
FROM node:9.2.0-alpine
WORKDIR /playground

COPY --from=builder /code/package.json .
COPY --from=builder /code/yarn.lock .

RUN yarn --prod

COPY --from=builder /code/dist dist

EXPOSE 14728
CMD ["yarn", "start"]
