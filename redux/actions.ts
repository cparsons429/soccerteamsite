/**
 * @Author: colinparsons
 * @Date:   2020-09-03T11:26:42-07:00
 * @Last modified by:   colinparsons
 * @Last modified time: 2020-09-06T11:18:21-07:00
 * @License: License can be found in root directory at LICENSE.md, or at https://github.com/cparsons429/soccerteamsite/blob/master/LICENSE.md
 * @Copyright: Copyright (c) Colin Parsons @Last modified time. All rights reserved. Complete copyright information located in the License file (see above).
 */

import { createAction } from "@reduxjs/toolkit";

import { fromJS, getIn, setIn } from "immutable";

import * as constants from "redux/constants";

import { Player, Players } from "models/interfaces";

export const increment = createAction(constants.INCREMENT, (step?: number) => ({
  payload: fromJS({
    step
  })
}));

export const decrement = createAction(constants.DECREMENT, (step?: number) => ({
  payload: fromJS({
    step
  })
}));

export const fullRosterRequest = createAction(
  constants.FULL_ROSTER_REQUEST,
  () => ({
    payload: fromJS({
      players: {
        status: "REQUEST"
      }
    })
  })
);

export const fullRosterSuccess = createAction(
  constants.FULL_ROSTER_SUCCESS,
  (players: Players) => ({
    payload: fromJS({
      players: {
        status: "SUCCESS",
        list: getIn(players, ["list"], undefined)
      }
    })
  })
);

export const fullRosterFail = createAction(constants.FULL_ROSTER_FAIL, () => ({
  payload: fromJS({
    players: {
      status: "FAIL"
    }
  })
}));

export const playerHighlightRequest = createAction(
  constants.PLAYER_HIGHLIGHT_REQUEST,
  (id: string) => ({
    payload: fromJS({
      player: {
        status: "REQUEST"
      },
      id
    })
  })
);

export const playerHighlightSuccess = createAction(
  constants.PLAYER_HIGHLIGHT_SUCCESS,
  (player: Player, id: string) => ({
    payload: fromJS({
      player: setIn(player, ["status"], "SUCCESS"),
      id
    })
  })
);

export const playerHighlightFail = createAction(
  constants.PLAYER_HIGHLIGHT_FAIL,
  (id: string) => ({
    payload: fromJS({
      player: {
        status: "FAIL"
      },
      id
    })
  })
);
