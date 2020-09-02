/**
 * @Author: colinparsons
 * @Date:   2020-08-23T08:52:20-07:00
 * @Last modified by:   colinparsons
 * @Last modified time: 2020-09-02T11:19:27-07:00
 * @License: License can be found in root directory at LICENSE.md, or at https://github.com/cparsons429/soccerteamsite/blob/master/LICENSE.md
 * @Copyright: Copyright (c) Colin Parsons @Last modified time. All rights reserved. Complete copyright information located in the License file (see above).
 */

import { fromJS, getIn, setIn } from "immutable";

import { createAction } from "@reduxjs/toolkit";

import * as constants from "redux/constants/players";

import { Player, Players } from "models/interfaces";

export const fullRosterRequest = createAction(
  constants.FULL_ROSTER_REQUEST,
  () => ({ payload: { status: "REQUEST" } })
);

export const fullRosterSuccess = createAction(
  constants.FULL_ROSTER_SUCCESS,
  (players: Players) => ({
    payload: {
      status: "SUCCESS",
      players,
      totalPlayers: getIn(players, ["list"], null).size
    }
  })
);

export const fullRosterFail = createAction(constants.FULL_ROSTER_FAIL, () => ({
  payload: { status: "FAIL" }
}));

export const playerHighlightRequest = createAction(
  constants.PLAYER_HIGHLIGHT_REQUEST,
  (id: string) => ({
    payload: {
      player: fromJS({ status: "REQUEST" }),
      id
    }
  })
);

export const playerHighlightSuccess = createAction(
  constants.PLAYER_HIGHLIGHT_SUCCESS,
  (player: Player, id: string) => ({
    payload: {
      player: setIn(player, ["status"], "SUCCESS"),
      id
    }
  })
);

export const playerHighlightFail = createAction(
  constants.PLAYER_HIGHLIGHT_FAIL,
  (id: string) => ({
    payload: {
      player: fromJS({ status: "FAIL" }),
      id
    }
  })
);
