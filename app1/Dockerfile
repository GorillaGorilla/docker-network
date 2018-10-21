FROM node:9.11.1-alpine

COPY package.json .

COPY server.js .

RUN npm install --production

EXPOSE 3051

# RUN ping -c 2 http://app2:3052/myname

CMD ["npm", "start"]
