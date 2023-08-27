# Use Node.js 14.x as the base image
FROM node:14.x as build-stage

WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire Angular app source code to the container
COPY . .

# Build the Angular app
RUN npm run build

# Stage 2: Serve the built app using Nginx
FROM nginx:1.15

# Copy the built app from the previous stage to Nginx's default HTML directory
COPY --from=build-stage /app/dist/* /usr/share/nginx/html/
