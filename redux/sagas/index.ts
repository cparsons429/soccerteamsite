/**
 * @Author: colinparsons
 * @Date:   2020-09-01T09:50:05-07:00
 * @Last modified by:   colinparsons
 * @Last modified time: 2020-09-01T11:40:39-07:00
 * @License: License can be found in root directory at LICENSE.md, or at https://github.com/cparsons429/soccerteamsite/blob/master/LICENSE.md
 * @Copyright: Copyright (c) Colin Parsons @Last modified time. All rights reserved. Complete copyright information located in the License file (see above).
 */

import { all, fork } from "redux-saga/effects";

import playersSaga from "redux/sagas/players/index";

export default function* rootSaga() {
  // to get task descriptors, use
  // const [blahTask, otherTask] = <following line>
  yield all([fork(playersSaga)]);
}
