FROM mhart/alpine-node:7

WORKDIR /usr/src/app
COPY . /usr/src/app

RUN apk add --no-cache make gcc g++ python
RUN npm install webpack -g && npm install
RUN webpack

VOLUME /usr/src/app/dist/

CMD [ "true" ]
