import { createAction } from "typesafe-actions";

import * as constants from "redux/constants/players";

import { Player, Players } from "models/interfaces";


export const fullRosterSuccess = createAction(
  constants.FULL_ROSTER_SUCCESS,
  action => {
    return (players: Players) => action(players);
  }
);

export const playerHighlightSuccess = createAction(
  constants.PLAYER_HIGHLIGHT_SUCCESS,
  action => {
    return (player: Player) => action(player);
  }
);

export const playerHighlightFail = createAction(
  constants.PLAYER_HIGHLIGHT_FAIL
);
