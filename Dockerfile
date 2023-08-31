FROM node:18
WORKDIR /app
COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm ci --only=prod
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm, "start"]