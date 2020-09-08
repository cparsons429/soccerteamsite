/**
 * @Author: colinparsons
 * @Date:   2020-08-23T08:52:20-07:00
 * @Last modified by:   colinparsons
 * @Last modified time: 2020-09-05T18:48:41-07:00
 * @License: License can be found in root directory at LICENSE.md, or at https://github.com/cparsons429/soccerteamsite/blob/master/LICENSE.md
 * @Copyright: Copyright (c) Colin Parsons @Last modified time. All rights reserved. Complete copyright information located in the License file (see above).
 */

import { getIn } from "immutable";

import { createSelector } from "reselect";

import { RootState } from "models/types";

export const getCount = (state: RootState) => getIn(state, ["count"], NaN);

export const getFullRoster = (state: RootState) =>
  getIn(state, ["players"], undefined);

export const getPlayerHighlight = createSelector(
  getFullRoster,
  (_: RootState, id: string) => id,
  (fullRoster, id) => getIn(fullRoster, ["list", id], undefined)
);
