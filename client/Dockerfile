# Install node
FROM node:12

RUN npm install -g http-server

# Create a directory to hold the app
WORKDIR /app

# Install dependancies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

RUN npm run build

EXPOSE 8080
CMD ["http-server", "dist"]