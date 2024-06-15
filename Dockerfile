# Use a Node.js base image
FROM node:22-alpine


# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY backend/package*.json ./

# Install dependencies
RUN npm install

# Copy server-side code
COPY backend ./backend

# Expose the server port (replace with your actual port if different)
EXPOSE 5050

# Start the server using npm script
CMD [ "npm", "start" ]