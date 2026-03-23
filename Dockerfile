# mo-nuxt — static Nuxt 2 site (npm run generate → nginx)
#
# Build:  docker build -t mo-nuxt .
# Run:    docker run --rm -p 8080:80 mo-nuxt
# Open:   http://localhost:8080

# syntax=docker/dockerfile:1

ARG NODE_VERSION=20

FROM node:${NODE_VERSION}-bookworm-slim AS builder

WORKDIR /app

# devDependencies (sass, cross-env) required for generate
ENV NODE_ENV=development

COPY package.json package-lock.json ./
# npm ci requires lockfile to match the npm version in the image; npm install is more tolerant for legacy trees
RUN npm install --no-audit --no-fund

COPY . .

# Same flags as package.json scripts (OpenSSL 3 + punycode deprecation noise)
ENV NODE_OPTIONS="--openssl-legacy-provider --disable-warning=DEP0040"

RUN npm run generate

# ---

FROM nginx:1.27-alpine AS runner

COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
    CMD wget -qO- http://127.0.0.1/ > /dev/null || exit 1
