/**
 * @Author: colinparsons
 * @Date:   2020-08-21T16:47:03-07:00
 * @Last modified by:   colinparsons
 * @Last modified time: 2020-09-08T13:59:19-07:00
 * @License: License can be found in root directory at LICENSE.md, or at https://github.com/cparsons429/soccerteamsite/blob/master/LICENSE.md
 * @Copyright: Copyright (c) Colin Parsons @Last modified time. All rights reserved. Complete copyright information located in the License file (see above).
 */

import { useEffect } from "react";

import { getIn } from "immutable";

import toJS from "data/to-js";

import { useDispatch, useSelector } from "react-redux";
import { fullRosterRequest } from "redux/actions";
import { getFullRoster } from "redux/selectors";

import { Pending, Success, Fail } from "components/presentational/full-roster";

const FullRosterContainer = () => {
  const dispatch = useDispatch();
  const fullRoster = useSelector(getFullRoster);
  const status = getIn(fullRoster, ["status"], undefined);

  useEffect(() => {
    if (status === undefined || status === "FAIL") {
      dispatch(fullRosterRequest());
    }
  }, []);

  if (status === undefined || status === "REQUEST") {
    return <Pending />;
  } else if (status === "SUCCESS") {
    return <Success {...toJS({ fullRoster })} />;
  } else if (status === "FAIL") {
    return <Fail />;
  } else {
    throw new Error(
      "Unrecognized status for full roster request: ".concat(status)
    );
  }
};

export default FullRosterContainer;
