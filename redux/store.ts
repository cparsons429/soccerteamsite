/**
 * @Author: colinparsons
 * @Date:   2020-08-23T08:52:20-07:00
 * @Last modified by:   colinparsons
 * @Last modified time: 2020-08-27T13:59:37-07:00
 * @License: License can be found in root directory at LICENSE.md, or at https://github.com/cparsons429/soccerteamsite/blob/master/LICENSE.md
 * @Copyright: Copyright (c) Colin Parsons @Last modified time. All rights reserved.
 */

import { createStore } from "redux";

import { createWrapper, Context } from "next-redux-wrapper";

import reducers from "redux/reducers/index";

const makeStore = (_context: Context) => createStore(reducers);

const wrapper = createWrapper(makeStore, { debug: false });

export default wrapper;
