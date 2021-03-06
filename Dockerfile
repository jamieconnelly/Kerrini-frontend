FROM mhart/alpine-node:7

WORKDIR /usr/src/app
COPY . /usr/src/app

RUN npm install webpack -g && npm install
RUN webpack

RUN mkdir -p /usr/local/nginx/html && cp -r /usr/src/app/dist/* /usr/local/nginx/html
VOLUME /usr/local/nginx/html

CMD [ "true" ]
