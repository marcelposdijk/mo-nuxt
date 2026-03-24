# mo-nuxt — Nuxt 2 SSR (npm run build → npm run start)
#
# Build:  docker build -t mo-nuxt .
# Run:    docker run --rm -p 3000:3000 mo-nuxt
# Open:   http://localhost:3000

# syntax=docker/dockerfile:1

ARG NODE_VERSION=20

FROM node:${NODE_VERSION}-bookworm-slim AS builder

WORKDIR /app

ENV NODE_ENV=development

COPY package.json package-lock.json ./
RUN npm install --no-audit --no-fund

COPY . .

ENV NODE_OPTIONS="--openssl-legacy-provider --disable-warning=DEP0040"

RUN npm run build

# ---

FROM node:${NODE_VERSION}-bookworm-slim AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NODE_OPTIONS="--openssl-legacy-provider --disable-warning=DEP0040"
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

COPY --from=builder /app ./

RUN npm prune --omit=dev --no-audit --no-fund

EXPOSE 3000

CMD ["node", "node_modules/nuxt/bin/nuxt.js", "start"]
