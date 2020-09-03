/**
 * @Author: colinparsons
 * @Date:   2020-08-23T17:20:43-07:00
 * @Last modified by:   colinparsons
 * @Last modified time: 2020-09-03T14:49:20-07:00
 * @License: License can be found in root directory at LICENSE.md, or at https://github.com/cparsons429/soccerteamsite/blob/master/LICENSE.md
 * @Copyright: Copyright (c) Colin Parsons @Last modified time. All rights reserved. Complete copyright information located in the License file (see above).
 */

import { useState, useEffect } from "react";

import { getIn } from "immutable";

import toJS from "data/to-js";
import { RootState } from "models/types";

import { useDispatch, useSelector } from "react-redux";
import { playerHighlightRequest } from "redux/actions";
import { getPlayerHighlight } from "redux/selectors";

import {
  Pending,
  Success,
  Fail
} from "components/presentational/player-highlight";

type Props = {
  id: string;
};

const PlayerHighlightContainer: React.FC<Props> = props => {
  const [id] = useState(props.id);
  const dispatch = useDispatch();
  const playerHighlight = useSelector((state: RootState) =>
    getPlayerHighlight(state, id)
  );
  const status = getIn(playerHighlight, ["status"], undefined);

  useEffect(() => {
    if (status === undefined || status === "FAIL") {
      dispatch(playerHighlightRequest(id));
    }
  }, []);

  if (status === undefined || status === "REQUEST") {
    return <Pending />;
  } else if (status === "SUCCESS") {
    return <Success {...toJS(playerHighlight)} />;
  } else if (status === "FAIL") {
    return <Fail />;
  } else {
    throw new Error(
      "Unrecognized status for player highlight request: ".concat(status)
    );
  }
};

export default PlayerHighlightContainer;
