FROM node:10-alpine
WORKDIR /usr/src/app
ADD . /usr/src/app
# Npm
RUN npm config set registry https://registry.npm.taobao.org/ && \  
   npm i
CMD ["npm", "run", "build"]
