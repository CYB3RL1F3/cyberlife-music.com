# ======================================
# STAGE 1: Build
# ======================================

FROM node:21-alpine AS builder

ENV NODE_VERSION=21.2.0

RUN npm install -g pnpm@9.11.0 typescript remix tailwindcss esbuild cross-env npm-run-all

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

COPY . .

RUN ls -la ./app

RUN pnpm run build

# ======================================
# STAGE 2: Production
# ======================================

FROM node:21-alpine AS production

ENV NODE_ENV=production

RUN npm install -g pnpm@9.11.0 pm2

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

RUN pnpm prune --prod

COPY --from=builder /app/public ./public
COPY --from=builder /app/build ./build
COPY --from=builder /app/app/styles ./app/styles

COPY --from=builder /app/ecosystem.config.js ./
COPY --from=builder /app/.env .env

CMD ["pm2-runtime", "ecosystem.config.js"]
