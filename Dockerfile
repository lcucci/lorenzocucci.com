# syntax=docker/dockerfile:1

# ---------- Build stage ----------
FROM node:20-alpine AS builder
WORKDIR /app
RUN apk add --no-cache libc6-compat

# Install only deps first (better caching)
COPY package.json package-lock.json* ./
RUN npm ci

# Copy the rest of the source
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# ---------- Runner stage ----------
FROM node:20-alpine AS runner
WORKDIR /app
RUN apk add --no-cache libc6-compat

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Create non-root user
RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001

# Copy standalone output & assets
# This puts server.js at /app/server.js
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
# Next.js reads PORT at runtime
CMD ["node", "server.js"]
