/**
 * @Author: colinparsons
 * @Date:   2020-08-23T08:52:20-07:00
 * @Last modified by:   colinparsons
 * @Last modified time: 2020-08-27T13:59:32-07:00
 * @License: License can be found in root directory at LICENSE.md, or at https://github.com/cparsons429/soccerteamsite/blob/master/LICENSE.md
 * @Copyright: Copyright (c) Colin Parsons @Last modified time. All rights reserved.
 */

import { getIn } from "immutable";

import { createSelector } from "reselect";

import { RootState } from "models/types";

export const getPlayersState = (state: RootState) =>
  getIn(state, ["playersState"], null);

export const getPlayer = createSelector(
  getPlayersState,
  (_: RootState, id: string) => id,
  (playersState, id) => getIn(playersState, ["players", "list", id], null)
);
