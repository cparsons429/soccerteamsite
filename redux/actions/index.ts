/**
 * @Author: colinparsons
 * @Date:   2020-08-23T08:52:20-07:00
 * @Last modified by:   colinparsons
 * @Last modified time: 2020-08-27T18:20:59-07:00
 * @License: License can be found in root directory at LICENSE.md, or at https://github.com/cparsons429/soccerteamsite/blob/master/LICENSE.md
 * @Copyright: Copyright (c) Colin Parsons @Last modified time. All rights reserved. Complete copyright information located in the License file (see above).
 */

import { createAction } from "@reduxjs/toolkit";

import { fromJS } from "immutable";

import { HYDRATE } from "next-redux-wrapper";

import * as playersActions from "redux/actions/players";

export const hydrate = createAction(HYDRATE);

const action = fromJS({
  hydrate: hydrate,
  players: playersActions
});

export default action;
