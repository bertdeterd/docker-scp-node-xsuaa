FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
COPY .npmrc .npmrc
RUN npm install
COPY . .

EXPOSE 80
CMD [ "npm", "start" ]

