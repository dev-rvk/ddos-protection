FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

RUN apt-get update && apt-get install -y nginx

RUN rm /etc/nginx/sites-enabled/default
COPY nginx.conf /etc/nginx/sites-enabled/

EXPOSE 3000

# Create a start script
RUN echo '#!/bin/bash\nnpm run start & nginx -g "daemon off;"' > /app/start.sh
RUN chmod +x /app/start.sh

CMD ["/app/start.sh"]