/**
 * @Author: colinparsons
 * @Date:   2020-08-23T08:52:20-07:00
 * @Last modified by:   colinparsons
 * @Last modified time: 2020-09-02T09:11:02-07:00
 * @License: License can be found in root directory at LICENSE.md, or at https://github.com/cparsons429/soccerteamsite/blob/master/LICENSE.md
 * @Copyright: Copyright (c) Colin Parsons @Last modified time. All rights reserved. Complete copyright information located in the License file (see above).
 */

import { createStore, applyMiddleware, Store } from "redux";
import { MakeStore, createWrapper, Context } from "next-redux-wrapper";
import createSagaMiddleware, { Task } from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "redux/reducers/index";
import rootSaga from "redux/sagas/index";

import { RootState } from "models/types";

export interface SagaStore extends Store {
  sagaTask?: Task;
}

export const makeStore: MakeStore<RootState> = (_context: Context) => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );

  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

const wrapper = createWrapper<RootState>(makeStore, { debug: false });

export default wrapper;
