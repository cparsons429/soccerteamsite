/**
 * @Author: colinparsons
 * @Date:   2020-09-03T13:00:05-07:00
 * @Last modified by:   colinparsons
 * @Last modified time: 2020-09-16T19:19:51-07:00
 * @License: License can be found in root directory at LICENSE.md, or at https://github.com/cparsons429/soccerteamsite/blob/master/LICENSE.md
 * @Copyright: Copyright (c) Colin Parsons @Last modified time. All rights reserved. Complete copyright information located in the License file (see above).
 */

import { fromJS, getIn, setIn } from "immutable";

import { createReducer } from "@reduxjs/toolkit";

import {
  FULL_ROSTER_REQUEST,
  FULL_ROSTER_SUCCESS,
  FULL_ROSTER_FAIL,
  PLAYER_HIGHLIGHT_REQUEST,
  PLAYER_HIGHLIGHT_SUCCESS,
  PLAYER_HIGHLIGHT_FAIL
} from "redux/constants";
import {
  fullRosterRequest,
  fullRosterSuccess,
  fullRosterFail,
  playerHighlightRequest,
  playerHighlightSuccess,
  playerHighlightFail
} from "redux/actions";

type PlayersState = {
  status?: string;
  list: {
    [id: string]: {
      status?: string;
      name: {
        first: string;
        last: string;
      };
      number: number;
      pictureSrc?: URL;
    };
  };
};

const initialState = fromJS({
  list: {}
});

const playersReducer = createReducer(initialState, builder =>
  builder
    .addCase(
      FULL_ROSTER_REQUEST,
      (_state: PlayersState, action: ReturnType<typeof fullRosterRequest>) =>
        getIn(action.payload, ["players"], initialState)
    )
    .addCase(
      FULL_ROSTER_SUCCESS,
      (_state: PlayersState, action: ReturnType<typeof fullRosterSuccess>) =>
        getIn(action.payload, ["players"], initialState)
    )
    .addCase(
      FULL_ROSTER_FAIL,
      (_state: PlayersState, action: ReturnType<typeof fullRosterFail>) =>
        getIn(action.payload, ["players"], initialState)
    )
    .addCase(
      PLAYER_HIGHLIGHT_REQUEST,
      (
        state: PlayersState,
        action: ReturnType<typeof playerHighlightRequest>
      ) =>
        setIn(
          state,
          ["list", getIn(action.payload, ["id"], undefined)],
          getIn(action.payload, ["player"], undefined)
        )
    )
    .addCase(
      PLAYER_HIGHLIGHT_SUCCESS,
      (
        state: PlayersState,
        action: ReturnType<typeof playerHighlightSuccess>
      ) =>
        setIn(
          state,
          ["list", getIn(action.payload, ["id"], undefined)],
          getIn(action.payload, ["player"], undefined)
        )
    )
    .addCase(
      PLAYER_HIGHLIGHT_FAIL,
      (state: PlayersState, action: ReturnType<typeof playerHighlightFail>) =>
        setIn(
          state,
          ["list", getIn(action.payload, ["id"], undefined)],
          getIn(action.payload, ["player"], undefined)
        )
    )
);

export default playersReducer;
