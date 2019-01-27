FROM node:lts-alpine
WORKDIR /app
COPY package*.json ./
COPY .npmrc .npmrc
RUN npm install
COPY . .
ENV PORT 80
EXPOSE 80
CMD [ "npm", "start" ]

