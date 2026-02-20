FROM nginx:alpine

LABEL version="1.0"
LABEL description = "una pagina de juegos"
LABEL maintainer ="holi@gmail.com"


WORKDIR /usr/share/nginx/html
COPY . .
EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]