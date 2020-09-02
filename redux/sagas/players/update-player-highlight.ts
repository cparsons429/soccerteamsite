/**
 * @Author: colinparsons
 * @Date:   2020-09-01T10:02:44-07:00
 * @Last modified by:   colinparsons
 * @Last modified time: 2020-09-02T16:35:04-07:00
 * @License: License can be found in root directory at LICENSE.md, or at https://github.com/cparsons429/soccerteamsite/blob/master/LICENSE.md
 * @Copyright: Copyright (c) Colin Parsons @Last modified time. All rights reserved. Complete copyright information located in the License file (see above).
 */

import { fromJS, getIn, setIn } from "immutable";

import { throttle, call, put } from "redux-saga/effects";
import { PLAYER_HIGHLIGHT_REQUEST } from "redux/constants/players";
import {
  playerHighlightRequest,
  playerHighlightSuccess,
  playerHighlightFail
} from "redux/actions/players";
import API from "redux/sagas/players/api";

import validate from "data/validate";
import { PlayerHighlight } from "models/schema";

import { ActionType } from "typesafe-actions";

export const PLAYER_HIGHLIGHT_THROTTLE_MS = 1000;

export function* playerHighlightWorker(
  action: ActionType<typeof playerHighlightRequest>
) {
  const id = action.payload.id;

  try {
    const response = yield call(API, "get", id);
    validate(PlayerHighlight, response.data);

    // TODO: delete this following statement
    // those are just placeholders until we actually control the API endpoint
    // at that point, a failure will be handled exactly as expected
    // DELETE STARTING HERE
    const int = Number(id);
    if (int < 0 || int > 19 || !/^\d+$/.test(id)) {
      throw new Error("ID does not correspond to a real player");
    }
    // DELETE ENDING HERE

    // after controlling the API endpoint, there will be no need to include int // to get the right value from response.data
    const result = fromJS(response.data.results[int]);
    let player = fromJS({});

    // after controlling the API endpoint, there will be no need to include int
    // as the player's number will be returned in the response
    player = setIn(player, ["number"], int);
    player = setIn(
      player,
      ["name", "first"],
      getIn(result, ["name", "first"], undefined)
    );
    player = setIn(
      player,
      ["name", "last"],
      getIn(result, ["name", "last"], undefined)
    );
    player = setIn(
      player,
      ["pictureSrc"],
      getIn(result, ["picture", "large"], undefined)
    );

    yield put(playerHighlightSuccess(player, id));
  } catch (error) {
    yield put(playerHighlightFail(id));
  }
}

export default function* playerHighlightWatcher() {
  yield throttle(
    PLAYER_HIGHLIGHT_THROTTLE_MS,
    PLAYER_HIGHLIGHT_REQUEST,
    playerHighlightWorker
  );
}
