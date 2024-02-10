FROM node:20.11.0-alpine AS build

WORKDIR /app

COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm ci
COPY . .

EXPOSE 8080

CMD ["npm", "run", "dev"]