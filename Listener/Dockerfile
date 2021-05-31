FROM node:14

RUN mkdir -p /app
WORKDIR /app
COPY package.json .
COPY yarn.lock .
COPY nodemon.json .
RUN yarn install
COPY ./src ./src

EXPOSE 5050
CMD ["yarn", "start"]
