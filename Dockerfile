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

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait

CMD /wait&& node server.js

#CMD ["node", "server.js"]