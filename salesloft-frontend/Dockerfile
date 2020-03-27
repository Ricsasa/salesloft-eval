FROM node:latest as build
WORKDIR /usr/src/app/salesloft-frontend
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build

FROM nginx:1.12-alpine
COPY --from=build /usr/src/app/salesloft-frontend/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]