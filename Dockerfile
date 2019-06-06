FROM node:alpine
RUN apk add --update yarn
WORKDIR /usr/app
COPY ./package.json .
RUN yarn install
COPY . .

CMD ["yarn", "start"]