# Étape 1 : Build de l'application
FROM node:21-alpine AS builder

ENV NODE_VERSION 21.2.0

# Installer PNPM, TypeScript et Remix globalement
RUN npm install -g pnpm typescript remix

# Définir le répertoire de travail
WORKDIR /usr/src/app

# Copier les fichiers de configuration uniquement
COPY package.json pnpm-lock.yaml ./

# Installer les dépendances (incluant les devDependencies pour le build)
RUN pnpm install --frozen-lockfile

# Copier le reste des fichiers de l'application
COPY . .

# Construire l'application pour la production
RUN pnpm run build

# Étape 2 : Exécution de l'application
FROM node:21-alpine

ENV NODE_VERSION 21.2.0

# Installer PNPM globalement
RUN npm install -g pnpm

# Définir le répertoire de travail
WORKDIR /usr/src/app

# Copier les fichiers nécessaires depuis l'étape de build
COPY --from=builder /usr/src/app/package.json /usr/src/app/pnpm-lock.yaml ./
COPY --from=builder /usr/src/app/build ./build
COPY --from=builder /usr/src/app/public ./public

# Installer uniquement les dépendances de production
RUN pnpm install --prod --frozen-lockfile

# Copier les fichiers de configuration nécessaires
COPY --from=builder /usr/src/app/remix.config.js ./
COPY --from=builder /usr/src/app/remix.env.d.ts ./

ENV PORT=3000

EXPOSE $PORT

CMD ["pnpm", "start"]
