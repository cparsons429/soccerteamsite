import { getIn } from "immutable";

import { createSelector } from "reselect";

import { RootState } from "models/types";


export const getPlayersState = (state: RootState) =>
    getIn(state, ["playersState"], null);

export const getPlayer = createSelector(
  getPlayersState,
  (_: RootState, id: string) => id,
  (playersState, id) => getIn(playersState, [ "players", "list", id], null)
);
