FROM node:10 AS build

WORKDIR /

COPY package.json .
COPY package-lock.json .

RUN npm cache clean --force
RUN npm i

COPY . .

RUN npm run build 

EXPOSE 5001

CMD ["node", "server.js"]
