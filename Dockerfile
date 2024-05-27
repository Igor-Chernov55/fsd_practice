FROM node:21 as build

WORKDIR /tmp/src
COPY --chown=1001:0 . .

RUN npm install

RUN npm run build:prod

FROM nginx:1.24.0
USER 0

COPY --from=build /tmp/src/dist /usr/share/nginx/html/
COPY docker/nginx.conf.template /etc/nginx/templates/nginx.conf.template
COPY docker/docker-entrypoint.sh /usr/bin

ENTRYPOINT ["docker-entrypoint.sh"]
CMD nginx -g "daemon off;"
