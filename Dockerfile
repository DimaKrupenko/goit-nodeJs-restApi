FROM node

WORKDIR /goit-nodeJs-restApi

COPY . .

RUN npm install

EXPOSE 3000

CMD ["node", "server"]