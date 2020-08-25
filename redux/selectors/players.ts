import { getIn } from "immutable";

import { createSelector } from "reselect";

import { RootState } from "models/types";


export const getPlayers = (state: RootState) =>
    getIn(state, ["playersState", "players"], null);

export const getPlayer = createSelector(
  getPlayers,
  (_: RootState, id: string) => id,
  (players, id) => getIn(players, ["list", id], null)
);
