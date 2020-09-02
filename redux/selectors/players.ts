/**
 * @Author: colinparsons
 * @Date:   2020-08-23T08:52:20-07:00
 * @Last modified by:   colinparsons
 * @Last modified time: 2020-09-02T16:37:36-07:00
 * @License: License can be found in root directory at LICENSE.md, or at https://github.com/cparsons429/soccerteamsite/blob/master/LICENSE.md
 * @Copyright: Copyright (c) Colin Parsons @Last modified time. All rights reserved. Complete copyright information located in the License file (see above).
 */

import { getIn } from "immutable";

import { createSelector } from "reselect";

import { RootState } from "models/types";

export const getPlayersState = (state: RootState) =>
  getIn(state, ["playersState"], undefined);

export const getPlayer = createSelector(
  getPlayersState,
  (_: RootState, id: string) => id,
  (playersState, id) => getIn(playersState, ["players", "list", id], undefined)
);
