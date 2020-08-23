import { createStore } from "redux";

import { MakeStore, createWrapper, Context } from "next-redux-wrapper";

import { RootState } from "models/types";

import reducers from "redux/reducers/index";


const makeStore: MakeStore<RootState> = (_context: Context) =>
    createStore(reducers);

const wrapper = createWrapper<RootState>(makeStore, { debug: false });

export default wrapper;
