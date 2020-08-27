import { createStore } from "redux";

import { createWrapper, Context } from "next-redux-wrapper";

import reducers from "redux/reducers/index";

const makeStore = (_context: Context) => createStore(reducers);

const wrapper = createWrapper(makeStore, { debug: false });

export default wrapper;
