FROM node:16

USER node

WORKDIR /mnt/c/Izhan Work/part-12/part12-containers-applications/todo-app/todo-backend/app

COPY --chown=node:node . .

RUN npm ci

CMD npm start