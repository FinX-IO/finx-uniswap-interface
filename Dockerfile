# Name the node stage "builder"
FROM node:10 AS builder
# Set working directory
# MKDIR finx
WORKDIR /finx
# WORKDIR /app
# Copy all files from current directory to working dir in image
COPY . .
# install node modules and build assets
RUN npx browserslist@latest --update-db
RUN yarn install && yarn build
# install PORTIS
RUN npm install web3 @portis/web3
# nginx state for serving content
FROM nginx:alpine
# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*
# Copy static assets from builder stage
COPY --from=builder /finx/build .
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]
