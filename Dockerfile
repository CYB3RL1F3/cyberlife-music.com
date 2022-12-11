# Filename: Dockerfile

FROM node:16.13.0-alpine3.11

ENV NODE_VERSION 16.17.0

RUN npm install -g pnpm
RUN npm install typescript -g

RUN apk add make gcc g++

RUN apk add --update --no-cache python3 && ln -sf python3 /usr/bin/python
ADD / /
WORKDIR /

COPY . .

RUN pnpm install --prod

RUN pnpm build

EXPOSE 8080
CMD ["pnpm" "start"]
