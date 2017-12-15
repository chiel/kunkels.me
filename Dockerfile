FROM node:9.2.0-alpine

WORKDIR /app

COPY yarn.lock .
COPY package.json .

RUN yarn --prod

COPY . .

EXPOSE 14728

CMD ["npm", "start"]
