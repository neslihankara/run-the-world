FROM node:alpine

WORKDIR /app

ADD package.json package-lock.json ./

RUN npm install

ADD public ./public
ADD .browserslistrc .eslintrc.js babel.config.js vue.config.js ./

CMD [ "npm", "run", "serve" ]
