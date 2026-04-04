FROM node:18

WORKDIR /app
<<<<<<< HEAD
COPY app/ .

RUN npm install

CMD ["node", "app.js"]
=======

COPY package.json .
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
>>>>>>> 260f0df89f157b76a9adde1ffec5f5bd50fdaecf
