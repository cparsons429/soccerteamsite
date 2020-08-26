import { useState, useEffect } from "react";

import toJS from "data/to-js";
import getPlayerHighlight from "data/get/player-highlight";
import validate from "data/validate";
import { PlayerHighlightProps } from "models/schema";

import { useDispatch, useSelector } from "react-redux";
import { playerHighlightSuccess, playerHighlightFail }
    from "redux/actions/players";
import { getPlayer } from "redux/selectors/players";

import PlayerHighlight from "components/presentational/player-highlight";

import { RootState } from "models/types";


type Props = {
  id: string;
};

const PlayerHighlightContainer: React.FC<Props> = props => {
  const [ id ] = useState(props.id);
  const [ queried, setQueried ] = useState(false);
  const dispatch = useDispatch();
  const player = useSelector(
    (state: RootState) => getPlayer(state, id)
  );

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
      }

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
}

export default PlayerHighlightContainer;
