/**
 * @Author: colinparsons
 * @Date:   2020-09-05T10:03:09-07:00
 * @Last modified by:   colinparsons
 * @Last modified time: 2020-09-16T19:20:07-07:00
 * @License: License can be found in root directory at LICENSE.md, or at https://github.com/cparsons429/soccerteamsite/blob/master/LICENSE.md
 * @Copyright: Copyright (c) Colin Parsons @Last modified time. All rights reserved. Complete copyright information located in the License file (see above).
 */

import { getIn } from "immutable";

import { createReducer } from "@reduxjs/toolkit";

import { INCREMENT, DECREMENT } from "redux/constants";
import { increment, decrement } from "redux/actions";

export type CountState = number;

const initialState = 0;

const countReducer = createReducer(initialState, builder =>
  builder
    .addCase(
      INCREMENT,
      (state: CountState, action: ReturnType<typeof increment>) => {
        const payloadStep = getIn(action.payload, ["step"], undefined);
        const numericStep = payloadStep === undefined ? 1 : payloadStep;
        return state + numericStep;
      }
    )
    .addCase(
      DECREMENT,
      (state: CountState, action: ReturnType<typeof decrement>) => {
        const payloadStep = getIn(action.payload, ["step"], undefined);
        const numericStep = payloadStep === undefined ? 1 : payloadStep;
        return state - numericStep;
      }
    )
);

export default countReducer;
