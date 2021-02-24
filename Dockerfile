FROM node:12.18.1

RUN mkdir /app
WORKDIR /app
ADD ./package.json /app
RUN npm install
ADD . /app