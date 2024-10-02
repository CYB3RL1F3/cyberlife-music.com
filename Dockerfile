# Utiliser l'image Node.js 21 basée sur Alpine
FROM node:21-alpine

# Définir la version de Node.js
ENV NODE_VERSION=21.2.0

# Installer PNPM globalement
RUN npm install -g pnpm@9.11.0 typescript remix

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de configuration
COPY package.json pnpm-lock.yaml ./

# Installer les dépendances (y compris les devDependencies pour le build)
RUN pnpm install --frozen-lockfile

# Copier le reste des fichiers de l'application
COPY . .

# Vérifier que entry.worker.ts existe
RUN ls -la /app/app

# Construire l'application pour la production
RUN pnpm run build

# Définir la variable d'environnement PORT
ENV PORT=3000

# Exposer le port
EXPOSE $PORT

# Lancer l'application
CMD ["pnpm", "start"]
