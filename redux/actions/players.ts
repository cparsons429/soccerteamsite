import { createAction } from "@reduxjs/toolkit";

import * as constants from "redux/constants/players";

import { Player, Players } from "models/interfaces";


export const fullRosterSuccess = createAction(
  constants.FULL_ROSTER_SUCCESS,
  (players: Players) => ({
    payload: {
      players,
    },
  })
);

export const fullRosterFail = createAction(
  constants.FULL_ROSTER_FAIL
);

export const playerHighlightSuccess = createAction(
  constants.PLAYER_HIGHLIGHT_SUCCESS,
  (player: Player) => ({
    payload: {
      player,
    },
  })
);

export const playerHighlightFail = createAction(
  constants.PLAYER_HIGHLIGHT_FAIL
);
