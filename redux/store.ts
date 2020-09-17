/**
 * @Author: colinparsons
 * @Date:   2020-08-23T08:52:20-07:00
 * @Last modified by:   colinparsons
 * @Last modified time: 2020-09-17T08:25:31-07:00
 * @License: License can be found in root directory at LICENSE.md, or at https://github.com/cparsons429/soccerteamsite/blob/master/LICENSE.md
 * @Copyright: Copyright (c) Colin Parsons @Last modified time. All rights reserved. Complete copyright information located in the License file (see above).
 */

import { createStore, applyMiddleware, Store } from "redux";
import { createWrapper, Context } from "next-redux-wrapper";
import createSagaMiddleware, { Task } from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "redux/reducers/index";
import rootSaga from "redux/sagas/index";

export interface SagaStore extends Store<ReturnType<typeof rootReducer>> {
  sagaTask?: Task;
}

const production = process.env.NODE_ENV === "production";

export const makeStore = (_context: Context) => {
  const sagaMiddleware = createSagaMiddleware();

  const store = production
    ? createStore(rootReducer, applyMiddleware(sagaMiddleware))
    : createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(sagaMiddleware))
      );

  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

const wrapper = createWrapper<ReturnType<typeof rootReducer>>(makeStore, {
  debug: !production
});

export default wrapper;
