# Filename: Dockerfile

FROM node:16.13.2-stretch

ENV NODE_VERSION 16.13.2

RUN npm install -g pnpm
RUN npm install typescript -g
RUN npm install -g remix

RUN apt install make gcc g++

RUN apt install python3 && ln -sf python3 /usr/bin/python


WORKDIR /usr/src/app

# Installer Remix et PNPM
COPY . .

RUN pnpm install

ENV PORT=3000

EXPOSE $PORT

CMD ["pnpm", "start"]
