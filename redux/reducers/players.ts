import { fromJS, getIn, setIn } from "immutable";

import { createReducer } from "@reduxjs/toolkit";

import { HYDRATE } from "next-redux-wrapper";

import * as constants from "redux/constants/players";

import { RootAction } from "models/types";


const initialState = fromJS({
  players: {
    list: [],
  },
});

const PlayersReducer = createReducer(initialState, builder =>
  builder
    .addCase(HYDRATE, (state, _action: RootAction) => {
      return state;
    })
    .addCase(constants.FULL_ROSTER_SUCCESS, (state, action: RootAction) => {
      const frsTmpState1 = setIn(state, ["players"], action.payload);

      return frsTmpState1;
    })
    .addCase(constants.PLAYER_HIGHLIGHT_SUCCESS, (state, action: RootAction) => {
      const phsNumber = getIn(action.payload, ["number"], null);
      const phsTmpState1 = setIn(state, ["players", "list", phsNumber],
          action.payload);

      return phsTmpState1;
    })
    .addCase(constants.PLAYER_HIGHLIGHT_FAIL, (state, _action: RootAction) => {
      return state;
    })
    .addDefaultCase((state, _action: RootAction) => {
      return state;
    })
);

export default PlayersReducer;
