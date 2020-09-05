 FROM node:10.6-alpine

RUN mkdir -p /client
WORKDIR /client

ENV PATH /client/node_modules/.bin:$PATH

COPY package.json /client/package.json
RUN npm install --silent
RUN npm install react-scripts@1.1.1 -g --silent