# To build and run using docker
# $ docker build -t shop-services-restify
# $ docker run -p 80:3030 --name shop-services-restify-running shop-services-restify
#
# To cleanup docker containers and images
# http://blog.baudson.de/blog/stop-and-remove-all-docker-containers-and-images
#
# docker ps -a            # Copy the hash of your container
# docker rm 3460c97f5dd1  # Use the hash of your container
# docker images           # Copy the has of your image
# docker rmi df6b9503523f # Use the has of your image

FROM node:9.3.0

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV
COPY package*.json /usr/src/app/
RUN npm install && npm cache clean --force
COPY . /usr/src/app

EXPOSE 3030
CMD [ "npm", "start" ]