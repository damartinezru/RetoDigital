FROM node:12.14.0
WORKDIR /app
COPY package-lock.json .
COPY package.json .
COPY . .
COPY waitforit.sh .
RUN npm install
CMD node server.js
