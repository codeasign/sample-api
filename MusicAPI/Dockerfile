# Use existing docker image as base
FROM node:alpine

#Create a root directory and copy into it
WORKDIR /usr/musicapi

#Copy and install dependenccie
COPY ./package.json ./
RUN npm install
COPY ./ ./

#Default Command
CMD [ "npm", "start"]