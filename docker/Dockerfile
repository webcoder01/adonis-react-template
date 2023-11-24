FROM node:18.18.2

RUN mkdir /app

COPY ./package.json /app
COPY ./package-lock.json /app

WORKDIR /app

COPY . .

# Initialize husky
RUN npm run prepare

CMD ["npm", "run", "dev"]
