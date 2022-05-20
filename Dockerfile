FROM node:alpine

WORKDIR /app

RUN apk add --update nodejs
COPY package*.json .

RUN npm install

COPY server/ .

CMD ["npm", "start"]