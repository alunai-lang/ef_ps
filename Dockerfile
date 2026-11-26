# Use a Node.js base image
FROM node:alpine as builder

# Set the working directory inside the container
WORKDIR /app

#ENV HOST 0.0.0.0

# Copy package.json and package-lock.json to leverage Docker cache
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React application
RUN npm run build

# Use a lightweight image to serve the built application
FROM nginx:alpine

# Copy the built React app to Nginx's web root
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80 for the Nginx server
#old EXPOSE 8081

EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]