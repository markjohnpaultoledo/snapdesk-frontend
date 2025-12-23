# ---------- Lambda adapter ----------
FROM public.ecr.aws/awsguru/aws-lambda-adapter:0.7.1 AS lambda-adapter


# ---------- Build stage ----------
FROM node:20-alpine AS builder
WORKDIR /app

RUN apk add --no-cache libc6-compat

COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then npm install -g pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

COPY . .
RUN yarn build


# ---------- Runtime (Lambda) ----------
FROM builder AS runner

COPY --from=lambda-adapter /lambda-adapter /opt/extensions/lambda-adapter

# App files
COPY --from=builder /app/build ./build
COPY --from=builder /app/server.js ./server.js
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

ENV PORT=8080
EXPOSE 8080

CMD ["node", "server.js"]