FROM node:20.11.0
WORKDIR /app
COPY  package*.json .
RUN npm install
COPY src/ /app/src
COPY  public/  /app/public
EXPOSE 3000
CMD [ "npm","start" ]