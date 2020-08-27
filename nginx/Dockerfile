# @Author: colinparsons
# @Date:   2020-08-20T10:23:52-07:00
# @Last modified by:   colinparsons
# @Last modified time: 2020-08-27T14:13:51-07:00
# @License: License can be found in root directory at LICENSE.md, or at https://github.com/cparsons429/soccerteamsite/blob/master/LICENSE.md
# @Copyright: Copyright (c) Colin Parsons @Last modified time. All rights reserved.

FROM nginx:alpine

# remove any existing config files
RUN rm etc/nginx/conf.d/*

# copy config files
COPY ./default.conf /etc/nginx/conf.d/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
