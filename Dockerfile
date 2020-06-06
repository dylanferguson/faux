FROM mhart/alpine-node AS builder
WORKDIR /app
COPY package.json .
COPY package-lock.json . 
RUN npm install
COPY . .
RUN npm run build && rm -rf node_modules && npm install next

FROM mhart/alpine-node:base
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/next.config.js ./next.config.js
COPY --from=builder /app/public ./public
COPY .env.local .env
EXPOSE 3000
CMD ["node_modules/.bin/next", "start"]