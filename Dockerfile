FROM node:alpine
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . ./
CMD ["npm", "start"]

FROM node:18-buster as nodeBuild
WORKDIR /var/tmp
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:stable
COPY --from=nodeBuild /var/tmp/build /usr/share/nginx/html

EXPOSE 80