/**
 * @Author: colinparsons
 * @Date:   2020-09-01T10:02:25-07:00
 * @Last modified by:   colinparsons
 * @Last modified time: 2020-09-06T15:21:26-07:00
 * @License: License can be found in root directory at LICENSE.md, or at https://github.com/cparsons429/soccerteamsite/blob/master/LICENSE.md
 * @Copyright: Copyright (c) Colin Parsons @Last modified time. All rights reserved. Complete copyright information located in the License file (see above).
 */

import { fromJS, getIn, setIn } from "immutable";

import { throttle, call, put } from "redux-saga/effects";
import { FULL_ROSTER_REQUEST } from "redux/constants";
import { fullRosterSuccess, fullRosterFail } from "redux/actions";
import PlayersServiceAPI from "redux/apis/players-service";

import validate from "data/validate";
import { FullRoster } from "models/schema";

export const FULL_ROSTER_THROTTLE_MS = 1000;

export function* fullRosterWorker() {
  try {
    const response = yield call(PlayersServiceAPI, "get");
    validate(FullRoster, response.data);

    const results = fromJS(response.data.results);
    let players = fromJS({});

    for (let i = 0; i < results.size; i++) {
      players = setIn(players, ["list", i.toString(), "number"], i);
      players = setIn(
        players,
        ["list", i.toString(), "name", "first"],
        getIn(results, [i, "name", "first"], undefined)
      );
      players = setIn(
        players,
        ["list", i.toString(), "name", "last"],
        getIn(results, [i, "name", "last"], undefined)
      );
    }

    yield put(fullRosterSuccess(players));
  } catch (error) {
    yield put(fullRosterFail());
  }
}

export default function* fullRosterWatcher() {
  yield throttle(
    FULL_ROSTER_THROTTLE_MS,
    FULL_ROSTER_REQUEST,
    fullRosterWorker
  );
}
