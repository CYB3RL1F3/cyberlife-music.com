# Filename: Dockerfile

FROM node:21-alpine

ENV NODE_VERSION 21.2.0

RUN npm install -g pnpm
RUN npm install typescript -g
RUN npm install -g remix

WORKDIR /usr/src/app

# Installer Remix et PNPM
COPY . .

RUN pnpm install

ENV PORT=3000

EXPOSE $PORT

CMD ["pnpm", "start"]
