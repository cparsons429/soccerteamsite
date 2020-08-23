import { combineReducers } from "redux-immutable";

import PlayersReducer from "redux/reducers/players";


const reducers = combineReducers({
  playersState: PlayersReducer,
});

export default reducers;
