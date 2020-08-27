import { createAction } from "@reduxjs/toolkit";

import { fromJS } from "immutable";

import { HYDRATE } from "next-redux-wrapper";

import * as playersActions from "redux/actions/players";

export const hydrate = createAction(HYDRATE);

const action = fromJS({
  hydrate: hydrate,
  players: playersActions
});

export default action;
