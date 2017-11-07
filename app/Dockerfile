FROM mhart/alpine-node:7

WORKDIR /usr/src/app
COPY . /usr/src/app

RUN npm install webpack-dev-server -g && npm install

CMD [ "npm", "run", "webpack-dev-server" ]
