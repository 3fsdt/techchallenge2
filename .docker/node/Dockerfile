FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
####################################### COPY ../../app/package*.json ./

####################################### RUN npm install
# If you are building your code for production
# RUN npm ci --omit=dev
# RUN npm install nodemon --global
# RUN npm install express --global
# RUN npm install nodemon --save-dev
RUN npm install -g express
RUN npm install -g nodemon

# Bundle app source
COPY ../../app/ .
RUN npm install

# RUN npm start

EXPOSE 8080

# OPCAO 1 PARA AMBIENTE DEV
#CMD ["nodemon", "--watch", ".", "--legacy-watch", "index.js"]

# OPCAO 2 PARA AMBIENTE HOMOLOG/PROD
CMD ["npm", "start"]