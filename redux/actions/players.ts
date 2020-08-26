import { createAction } from "@reduxjs/toolkit";

import * as constants from "redux/constants/players";

import { Player, Players } from "models/interfaces";


export const fullRosterSuccess = createAction(
  constants.FULL_ROSTER_SUCCESS,
  (players: Players, totalPlayers: number) => ({
    payload: {
      players,
      totalPlayers,
    },
  })
);

export const fullRosterFail = createAction(
  constants.FULL_ROSTER_FAIL
);

export const playerHighlightSuccess = createAction(
  constants.PLAYER_HIGHLIGHT_SUCCESS,
  (player: Player, id: string) => ({
    payload: {
      player,
      id,
    },
  })
);

export const playerHighlightFail = createAction(
  constants.PLAYER_HIGHLIGHT_FAIL,
  (id: string) => ({
    payload: {
      id,
    },
  })
);
