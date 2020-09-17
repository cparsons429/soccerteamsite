# @Author: colinparsons
# @Date:   2020-08-28T14:36:21-07:00
# @Last modified by:   colinparsons
# @Last modified time: 2020-09-04T10:09:41-07:00
# @License: License can be found in root directory at LICENSE.md, or at https://github.com/cparsons429/soccerteamsite/blob/master/LICENSE.md
# @Copyright: Copyright (c) Colin Parsons @Last modified time. All rights reserved. Complete copyright information located in the License file (see above).

# FIRST BUILD STAGE: compile-time
FROM node:alpine AS build

# where to save the compiled image
WORKDIR /usr/build

# copy only the parts needed to install dependencies
COPY package.json tsconfig.json ./

# install *all* dependencies (including dev dependencies)
RUN npm install

# copy everything else
COPY . .

# build
RUN npm run build

# SECOND BUILD STAGE: runtime
FROM node:alpine AS run

# where to save the runtime image
WORKDIR /usr/run

# we're now in a production environment
ENV NODE_ENV=production

# install PM2 globally
RUN npm install --global pm2

# again copy only the parts needed to install dependencies
COPY package.json tsconfig.json ./

# but this time, only install runtime dependencies (since NODE_ENV=production)
RUN npm install

# get the built application from the first stage
COPY --from=build /usr/build .

# we expose port 3000 for consistency within the container vs. external to the container
# that's because external services will use port 3000 to access the next build
# that's because the default port for next start is 3000
# this can be changed in package.json by including the -p <port> flag next to next start
# https://stackoverflow.com/questions/22111060/what-is-the-difference-between-expose-and-publish-in-docker
EXPOSE 3000

# run container as non-root (unprivileged) user
USER node

# instead of running npm run start, we use PM2, a production-ready process manager for node js
# PM2 just makes sure our app is always restarted after crashing
CMD ["pm2-runtime", "npm", "--", "run", "start"]
