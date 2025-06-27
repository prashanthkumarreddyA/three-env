# Use official Node.js LTS slim image
FROM node:18-slim

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy source code
COPY . .

# Expose port (Render will override with PORT env var)
EXPOSE 3000

# Run the app
CMD ["node", "server.js"]
