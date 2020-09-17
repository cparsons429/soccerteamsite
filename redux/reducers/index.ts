/**
 * @Author: colinparsons
 * @Date:   2020-09-03T13:41:18-07:00
 * @Last modified by:   colinparsons
 * @Last modified time: 2020-09-17T08:19:31-07:00
 * @License: License can be found in root directory at LICENSE.md, or at https://github.com/cparsons429/soccerteamsite/blob/master/LICENSE.md
 * @Copyright: Copyright (c) Colin Parsons @Last modified time. All rights reserved. Complete copyright information located in the License file (see above).
 */

import { combineReducers } from "redux-immutable";

import countReducer from "redux/reducers/count";
import playersReducer from "redux/reducers/players";

const rootReducer = combineReducers({
  count: countReducer,
  players: playersReducer
});

export default rootReducer;
