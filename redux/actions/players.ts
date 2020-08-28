/**
 * @Author: colinparsons
 * @Date:   2020-08-23T08:52:20-07:00
 * @Last modified by:   colinparsons
 * @Last modified time: 2020-08-27T18:21:02-07:00
 * @License: License can be found in root directory at LICENSE.md, or at https://github.com/cparsons429/soccerteamsite/blob/master/LICENSE.md
 * @Copyright: Copyright (c) Colin Parsons @Last modified time. All rights reserved. Complete copyright information located in the License file (see above).
 */

import { createAction } from "@reduxjs/toolkit";

import * as constants from "redux/constants/players";

import { Player, Players } from "models/interfaces";

export const fullRosterSuccess = createAction(
  constants.FULL_ROSTER_SUCCESS,
  (players: Players, totalPlayers: number) => ({
    payload: {
      players,
      totalPlayers
    }
  })
);

export const fullRosterFail = createAction(constants.FULL_ROSTER_FAIL);

export const playerHighlightSuccess = createAction(
  constants.PLAYER_HIGHLIGHT_SUCCESS,
  (player: Player, id: string) => ({
    payload: {
      player,
      id
    }
  })
);

export const playerHighlightFail = createAction(
  constants.PLAYER_HIGHLIGHT_FAIL,
  (id: string) => ({
    payload: {
      id
    }
  })
);
