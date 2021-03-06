/**
 * @Author: colinparsons
 * @Date:   2020-08-23T08:52:20-07:00
 * @Last modified by:   colinparsons
 * @Last modified time: 2020-09-08T09:44:36-07:00
 * @License: License can be found in root directory at LICENSE.md, or at https://github.com/cparsons429/soccerteamsite/blob/master/LICENSE.md
 * @Copyright: Copyright (c) Colin Parsons @Last modified time. All rights reserved. Complete copyright information located in the License file (see above).
 */

type RootState = {
  count: number;
  players: {
    status?: string;
    list: {
      [id: string]: {
        status?: string;
        name: {
          first: string;
          last: string;
        };
        pictureSrc?: URL;
      };
    };
  };
};

export default RootState;
