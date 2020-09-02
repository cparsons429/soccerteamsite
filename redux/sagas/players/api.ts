/**
 * @Author: colinparsons
 * @Date:   2020-09-01T11:25:17-07:00
 * @Last modified by:   colinparsons
 * @Last modified time: 2020-09-02T16:42:56-07:00
 * @License: License can be found in root directory at LICENSE.md, or at https://github.com/cparsons429/soccerteamsite/blob/master/LICENSE.md
 * @Copyright: Copyright (c) Colin Parsons @Last modified time. All rights reserved. Complete copyright information located in the License file (see above).
 */

import axios from "axios";

const API = (method: string, id?: string) => {
  if (method === "get") {
    // once we control the API endpoint, these requests will actually be
    // structured differently / have different URL params
    if (id === undefined) {
      return axios.get(
        "https://randomuser.me/api/?results=20&seed=ef982b7030296251"
      );
    } else {
      return axios.get(
        "https://randomuser.me/api/?results=20&seed=ef982b7030296251"
      );
    }
  }
  throw new Error("Players API unable to understand request arguments");
};

export default API;
