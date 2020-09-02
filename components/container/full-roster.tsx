/**
 * @Author: colinparsons
 * @Date:   2020-08-21T16:47:03-07:00
 * @Last modified by:   colinparsons
 * @Last modified time: 2020-09-02T16:01:44-07:00
 * @License: License can be found in root directory at LICENSE.md, or at https://github.com/cparsons429/soccerteamsite/blob/master/LICENSE.md
 * @Copyright: Copyright (c) Colin Parsons @Last modified time. All rights reserved. Complete copyright information located in the License file (see above).
 */

import { useEffect } from "react";

import { getIn } from "immutable";

import toJS from "data/to-js";

import { useDispatch, useSelector } from "react-redux";
import { fullRosterRequest } from "redux/actions/players";
import { getPlayersState } from "redux/selectors/players";

import { Pending, Success, Fail } from "components/presentational/full-roster";

const FullRosterContainer = () => {
  const dispatch = useDispatch();
  const playersState = useSelector(getPlayersState);
  const status = getIn(playersState, ["status"], null);

  useEffect(() => {
    if (status === null || status === "FAIL") {
      dispatch(fullRosterRequest());
    }
  }, []);

  if (status === null || status === "REQUEST") {
    return <Pending />;
  } else if (status === "SUCCESS") {
    return <Success {...toJS(playersState)} />;
  } else if (status === "FAIL") {
    return <Fail />;
  } else {
    throw new Error(
      "Unrecognized status for full roster request: ".concat(status)
    );
  }
};

export default FullRosterContainer;
