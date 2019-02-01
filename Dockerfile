FROM node:lts-alpine
WORKDIR /app
COPY package*.json ./
COPY .npmrc .npmrc
RUN npm install
COPY . .
ENV PORT 8080
EXPOSE 8080
CMD [ "npm", "start" ]

