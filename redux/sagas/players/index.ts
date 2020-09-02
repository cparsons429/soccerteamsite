/**
 * @Author: colinparsons
 * @Date:   2020-09-01T11:25:05-07:00
 * @Last modified by:   colinparsons
 * @Last modified time: 2020-09-01T15:49:40-07:00
 * @License: License can be found in root directory at LICENSE.md, or at https://github.com/cparsons429/soccerteamsite/blob/master/LICENSE.md
 * @Copyright: Copyright (c) Colin Parsons @Last modified time. All rights reserved. Complete copyright information located in the License file (see above).
 */

import { all, fork } from "redux-saga/effects";

import fullRosterWatcher from "redux/sagas/players/update-full-roster";
import playerHighlightWatcher from "redux/sagas/players/update-player-highlight";

export default function* playersSaga() {
  // to get task descriptors, use
  // const [blahTask, otherTask] = <following line>
  yield all([fork(fullRosterWatcher), fork(playerHighlightWatcher)]);
}
