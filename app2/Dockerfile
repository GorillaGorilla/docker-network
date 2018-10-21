FROM node:9.11.1-alpine

COPY package.json .

COPY server.js .

RUN npm install --production

EXPOSE 3052

RUN ls

CMD ["npm", "start"]
