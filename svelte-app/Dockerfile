# Stage 1: Build the Svelte app
FROM node:22-alpine AS builder
WORKDIR /home/sveltekit-app
COPY . .

# Install the dependencies
RUN npm install

# Build the Svelte app
RUN npm run build

# Stage 2: Serve the app using an Express server
FROM node:22-alpine AS express_server
WORKDIR /home/app

# Copy the build directory from the builder stage
COPY --from=builder /home/sveltekit-app/build /home/app/build

# Copy server.js and package.json
COPY --from=builder /home/sveltekit-app/server.js /home/app/server.js
COPY --from=builder /home/sveltekit-app/package.json /home/app/package.json

# Install the express package npm config set registry https://registry.npmjs.org/ && 
RUN npm install express --loglevel verbose

# Expose the port
EXPOSE 8080

# Start the server
CMD ["node", "server.js"]
