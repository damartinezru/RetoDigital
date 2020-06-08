FROM node:12.14.0
WORKDIR /app
COPY package-lock.json .
COPY package.json .
RUN npm install
COPY . .
COPY wait-for-it.sh .
CMD node server.js
