import { getIn } from "immutable";

// use this when we want to create more complicated selectors
// import { createSelector } from "reselect";

import { Players } from "models/interfaces";
import { RootState } from "models/types";


export const getPlayers = (state: RootState): Players =>
    getIn(state, ["playersState", "players"], null);
