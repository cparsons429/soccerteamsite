import { getIn } from "immutable";

import { createSelector } from "reselect";

import { Players } from "models/interfaces";
import { RootState } from "models/types";


export const getPlayers = (state: RootState): Players =>
    getIn(state, ["playersState", "players"], null);

export const getPlayer = createSelector(
  getPlayers,
  (_: RootState, number: number) => number,
  (players, number) => getIn(players, [number], null)
);
