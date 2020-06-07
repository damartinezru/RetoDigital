FROM node:12.14.0
WORKDIR /app
COPY package-lock.json
COPY package.json
RUN npm install
CMD node index.json
