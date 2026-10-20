# Stage 1: build static assets
FROM node:20-alpine AS build
WORKDIR /app
COPY package.json build.js index.html ./
RUN npm run build

# Stage 2: serve with nginx
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
