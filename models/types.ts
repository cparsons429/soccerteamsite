/**
 * @Author: colinparsons
 * @Date:   2020-08-23T08:52:20-07:00
 * @Last modified by:   colinparsons
 * @Last modified time: 2020-08-28T14:26:50-07:00
 * @License: License can be found in root directory at LICENSE.md, or at https://github.com/cparsons429/soccerteamsite/blob/master/LICENSE.md
 * @Copyright: Copyright (c) Colin Parsons @Last modified time. All rights reserved. Complete copyright information located in the License file (see above).
 */

import { StateType, ActionType } from "typesafe-actions";

export type RootAction = ActionType<
  typeof import("redux/actions/index").default
>;

export type RootState = StateType<
  ReturnType<typeof import("redux/reducers/index").default>
>;
