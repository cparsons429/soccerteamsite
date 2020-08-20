FROM node:12-alpine

RUN mkdir -p /usr/app
WORKDIR /usr/app

COPY package.json package-lock.json yarn.lock ./
RUN npm install --production
COPY . /usr/app

RUN npm run build

# we expose port 3000 for consistency within the container vs. external to the container
# that's because external services will use port 3000 to access the next build
# that's because the default port for next start is 3000
# this can be changed in package.json by including the -p <port> flag next to next start
# https://stackoverflow.com/questions/22111060/what-is-the-difference-between-expose-and-publish-in-docker
EXPOSE 3000
CMD ["npm", "run", "dev"]
