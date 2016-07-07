# Use current version of node
FROM node:latest

# Create app directory
RUN mkdir -p  ~/Documents/Docker
WORKDIR  ~/Documents/Docker

# Install app dependencies
COPY package.json  ~/Documents/Docker
RUN npm install

# Bundle app source
COPY .  ~/Documents/Docker

EXPOSE 8002

CMD ["npm", "start" ]