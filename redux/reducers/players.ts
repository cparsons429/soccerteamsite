import { fromJS, setIn } from "immutable";

import { createReducer } from "@reduxjs/toolkit";

import { HYDRATE } from "next-redux-wrapper";

import * as constants from "redux/constants/players";

import { RootAction } from "models/types";


const initialState = fromJS({
  players: {
    list: {},
  },
});

const PlayersReducer = createReducer(initialState, builder =>
  builder
    .addCase(HYDRATE, (state, _action: RootAction) => {
      return state;
    })
    .addCase(constants.FULL_ROSTER_SUCCESS, (state, action: RootAction) => {
      const frsTmpState1 = setIn(state, ["players"], action.payload.players);

      return frsTmpState1;
    }).addCase(constants.FULL_ROSTER_FAIL, (_state, _action: RootAction) => {
      return initialState;
    }).addCase(
        constants.PLAYER_HIGHLIGHT_SUCCESS,
        (state, action: RootAction) => {
      const phsTmpState1 = setIn(state, ["players", "list", action.payload.id],
          action.payload.player);

      return phsTmpState1;
    })
    .addCase(constants.PLAYER_HIGHLIGHT_FAIL, (state, action: RootAction) => {
      const phfTmpState1 = setIn(state,
          ["players", "list", action.payload.id], null);

      return phfTmpState1;
    })
    .addDefaultCase((state, _action: RootAction) => {
      return state;
    })
);

export default PlayersReducer;
