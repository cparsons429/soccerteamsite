/**
 * @Author: colinparsons
 * @Date:   2020-08-23T08:52:20-07:00
 * @Last modified by:   colinparsons
 * @Last modified time: 2020-09-17T08:23:45-07:00
 * @License: License can be found in root directory at LICENSE.md, or at https://github.com/cparsons429/soccerteamsite/blob/master/LICENSE.md
 * @Copyright: Copyright (c) Colin Parsons @Last modified time. All rights reserved. Complete copyright information located in the License file (see above).
 */

import { getIn } from "immutable";

import { createSelector } from "reselect";

import rootReducer from "redux/reducers/index";

export const getCount = (state: ReturnType<typeof rootReducer>) =>
  getIn(state, ["count"], NaN);

export const getFullRoster = (state: ReturnType<typeof rootReducer>) =>
  getIn(state, ["players"], undefined);

const getIdHelper = (_state: ReturnType<typeof rootReducer>, id: string) => id;

export const getPlayerHighlight = createSelector(
  getFullRoster,
  getIdHelper,
  (
    fullRoster: ReturnType<typeof getFullRoster>,
    id: ReturnType<typeof getIdHelper>
  ) => getIn(fullRoster, ["list", id], undefined)
);
