/**
 * @Author: colinparsons
 * @Date:   2020-08-23T17:20:43-07:00
 * @Last modified by:   colinparsons
 * @Last modified time: 2020-09-02T10:20:33-07:00
 * @License: License can be found in root directory at LICENSE.md, or at https://github.com/cparsons429/soccerteamsite/blob/master/LICENSE.md
 * @Copyright: Copyright (c) Colin Parsons @Last modified time. All rights reserved. Complete copyright information located in the License file (see above).
 */

import { useState, useEffect } from "react";

import { getIn } from "immutable";

import toJS from "data/to-js";
import validate from "data/validate";
import { PlayerHighlightProps } from "models/schema";
import { RootState } from "models/types";

import { useDispatch, useSelector } from "react-redux";
import { playerHighlightRequest } from "redux/actions/players";
import { getPlayer } from "redux/selectors/players";

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
  const player = useSelector((state: RootState) => getPlayer(state, id));

  useEffect(() => {
    try {
      validate(PlayerHighlightProps(), toJS(player));
    } catch (error) {
      dispatch(playerHighlightRequest(id));
    }
  }, []);

  const status = getIn(player, ["status"], null);

  if (status === null || status === "REQUEST") {
    return <Pending />;
  } else if (status === "SUCCESS") {
    return <Success {...toJS({ player })} />;
  } else if (status === "FAIL") {
    return <Fail />;
  } else {
    throw new Error(
      "Unrecognized status for player highlight request: ".concat(status)
    );
  }
};

export default PlayerHighlightContainer;
