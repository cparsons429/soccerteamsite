# @Author: colinparsons
# @Date:   2020-08-18T14:29:49-07:00
# @Last modified by:   colinparsons
# @Last modified time: 2020-08-27T18:21:54-07:00
# @License: License can be found in root directory at LICENSE.md, or at https://github.com/cparsons429/soccerteamsite/blob/master/LICENSE.md
# @Copyright: Copyright (c) Colin Parsons @Last modified time. All rights reserved. Complete copyright information located in the License file (see above).

FROM node:alpine

WORKDIR /usr/app

RUN npm install --global pm2

COPY package*.json tsconfig.json ./

RUN npm install --production

COPY . .

RUN npm run build

# we expose port 3000 for consistency within the container vs. external to the container
# that's because external services will use port 3000 to access the next build
# that's because the default port for next start is 3000
# this can be changed in package.json by including the -p <port> flag next to next start
# https://stackoverflow.com/questions/22111060/what-is-the-difference-between-expose-and-publish-in-docker
EXPOSE 3000

USER node

# instead of running npm run start, we use PM2, a production-ready process manager for node js
# PM2 just makes sure our app is always restarted after crashing
CMD ["pm2-runtime", "npm", "--", "run", "start"]
