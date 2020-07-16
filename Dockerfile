# Install node
FROM node:12

# Create a directory to hold the app
WORKDIR /usr/app/src

# Install dependancies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

EXPOSE 5050

CMD ["node", "server.js"]