FROM node:chakracore-10.13.0

WORKDIR /usr/app

COPY package.* ./

RUN npm i

COPY . .

CMD ["node", "index.js"]