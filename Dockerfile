FROM nginx:apline

WORKDIR /usr/share/nginx/html
COPY ./dist/weekendchallenge /usr/share/nginx/html/

EXPOSE 80