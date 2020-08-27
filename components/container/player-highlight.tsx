/**
 * @Author: colinparsons
 * @Date:   2020-08-23T17:20:43-07:00
 * @Last modified by:   colinparsons
 * @Last modified time: 2020-08-27T13:56:57-07:00
 * @License: License can be found in root directory at LICENSE.md, or at https://github.com/cparsons429/soccerteamsite/blob/master/LICENSE.md
 * @Copyright: Copyright (c) Colin Parsons @Last modified time. All rights reserved.
 */

import { useState, useEffect } from "react";

import toJS from "data/to-js";
import getPlayerHighlight from "data/get/player-highlight";
import validate from "data/validate";
import { PlayerHighlightProps } from "models/schema";

import { useDispatch, useSelector } from "react-redux";
import {
  playerHighlightSuccess,
  playerHighlightFail
} from "redux/actions/players";
import { getPlayer } from "redux/selectors/players";

import PlayerHighlight from "components/presentational/player-highlight";

import { RootState } from "models/types";

type Props = {
  id: string;
};

const PlayerHighlightContainer: React.FC<Props> = props => {
  const [id] = useState(props.id);
  const [queried, setQueried] = useState(false);
  const dispatch = useDispatch();
  const player = useSelector((state: RootState) => getPlayer(state, id));

  useEffect(() => {
    if (!validate(PlayerHighlightProps(), toJS(player))) {
      const query = async () => {
        const returnPlayer = await getPlayerHighlight(id);

        if (returnPlayer) {
          dispatch(playerHighlightSuccess(returnPlayer, id));
        } else {
          dispatch(playerHighlightFail(id));
        }

        setQueried(true);
      };

      query();
    } else {
      setQueried(true);
    }
  }, []);

  if (queried) {
    return <PlayerHighlight {...toJS({ player })} />;
  } else {
    return <div />;
  }
};

export default PlayerHighlightContainer;
