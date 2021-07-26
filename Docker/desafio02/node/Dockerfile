FROM node:15

WORKDIR /usr/src/app

COPY package.json .
COPY entrypoint.sh .

RUN npm install
EXPOSE 3000