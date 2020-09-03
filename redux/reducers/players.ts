/**
 * @Author: colinparsons
 * @Date:   2020-09-03T13:00:05-07:00
 * @Last modified by:   colinparsons
 * @Last modified time: 2020-09-03T14:22:12-07:00
 * @License: License can be found in root directory at LICENSE.md, or at https://github.com/cparsons429/soccerteamsite/blob/master/LICENSE.md
 * @Copyright: Copyright (c) Colin Parsons @Last modified time. All rights reserved. Complete copyright information located in the License file (see above).
 */
/**
 * @Author: colinparsons
 * @Date:   2020-08-23T08:52:20-07:00
 * @Last modified by:   colinparsons
 * @Last modified time: 2020-09-03T14:22:12-07:00
 * @License: License can be found in root directory at LICENSE.md, or at https://github.com/cparsons429/soccerteamsite/blob/master/LICENSE.md
 * @Copyright: Copyright (c) Colin Parsons @Last modified time. All rights reserved. Complete copyright information located in the License file (see above).
 */

import { fromJS, getIn, setIn } from "immutable";

import { createReducer } from "@reduxjs/toolkit";

import * as constants from "redux/constants";

const initialState = fromJS({
  players: {
    list: {}
  }
});

const doNothingReducer = createReducer(initialState, builder =>
  builder.addDefaultCase((state, _action) => state)
);

const fullRosterReducer = createReducer(initialState, builder =>
  builder.addDefaultCase((_state, action) => action.payload)
);

const playerHighlightReducer = createReducer(initialState, builder =>
  builder.addDefaultCase((state, action) =>
    setIn(
      state,
      ["players", "list", getIn(action.payload, ["id"], undefined)],
      getIn(action.payload, ["player"], undefined)
    )
  )
);

const PlayersReducer = createReducer(initialState, builder =>
  builder
    .addCase(constants.HYDRATE, doNothingReducer)
    .addCase(constants.FULL_ROSTER_REQUEST, fullRosterReducer)
    .addCase(constants.FULL_ROSTER_SUCCESS, fullRosterReducer)
    .addCase(constants.FULL_ROSTER_FAIL, fullRosterReducer)
    .addCase(constants.PLAYER_HIGHLIGHT_REQUEST, playerHighlightReducer)
    .addCase(constants.PLAYER_HIGHLIGHT_SUCCESS, playerHighlightReducer)
    .addCase(constants.PLAYER_HIGHLIGHT_FAIL, playerHighlightReducer)
    .addDefaultCase(doNothingReducer)
);

export default PlayersReducer;
