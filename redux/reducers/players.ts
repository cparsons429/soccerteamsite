/**
 * @Author: colinparsons
 * @Date:   2020-08-23T08:52:20-07:00
 * @Last modified by:   colinparsons
 * @Last modified time: 2020-08-27T13:59:28-07:00
 * @License: License can be found in root directory at LICENSE.md, or at https://github.com/cparsons429/soccerteamsite/blob/master/LICENSE.md
 * @Copyright: Copyright (c) Colin Parsons @Last modified time. All rights reserved.
 */

import { fromJS, setIn } from "immutable";

import { createReducer } from "@reduxjs/toolkit";

import { HYDRATE } from "next-redux-wrapper";

import * as constants from "redux/constants/players";

import { RootAction } from "models/types";

const initialState = fromJS({});

const PlayersReducer = createReducer(initialState, builder =>
  builder
    .addCase(HYDRATE, (state, _action: RootAction) => {
      return state;
    })
    .addCase(constants.FULL_ROSTER_SUCCESS, (state, action: RootAction) => {
      state = setIn(state, ["players"], action.payload.players);
      return setIn(state, ["totalPlayers"], action.payload.totalPlayers);
    })
    .addCase(constants.FULL_ROSTER_FAIL, (_state, _action: RootAction) => {
      return initialState;
    })
    .addCase(
      constants.PLAYER_HIGHLIGHT_SUCCESS,
      (state, action: RootAction) => {
        return setIn(
          state,
          ["players", "list", action.payload.id],
          action.payload.player
        );
      }
    )
    .addCase(constants.PLAYER_HIGHLIGHT_FAIL, (state, action: RootAction) => {
      return setIn(state, ["players", "list", action.payload.id], null);
    })
    .addDefaultCase((state, _action: RootAction) => {
      return state;
    })
);

export default PlayersReducer;
