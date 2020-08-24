import { useState, useEffect } from "react";

import { fromJS, getIn } from "immutable";

import propsToJS from "data/props-to-js";

import { useDispatch, useSelector } from "react-redux";
import { playerHighlightSuccess, playerHighlightFail }
    from "redux/actions/players";
import { getPlayer } from "redux/selectors/players";

import axios from "axios";

import PlayerHighlight from "components/presentational/player-highlight";

import { RootState } from "models/types";


type Props = {
  numberStr: string;
};

const PlayerHighlightContainer: React.FC<Props> = props => {
  const [ numberStr ] = useState(props.numberStr);
  const [ queried, setQueried ] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPlayers = async () => {
      const result = await axios.get
          ("https://randomuser.me/api/?results=20&seed=ef982b7030296251");

      const returnPlayer = fromJS(result.data.results[parseInt(numberStr, 10)]);

      if (returnPlayer) {
        const returnPlayerMinimized = fromJS({
          number: parseInt(numberStr, 10),
          name: {
            first: getIn(returnPlayer, ["name", "first"], null),
            last: getIn(returnPlayer, ["name", "last"], null),
          },
          pictureSrc: getIn(returnPlayer, ["picture", "medium"], null),
        });

        dispatch(playerHighlightSuccess(returnPlayerMinimized));
      } else {
        dispatch(playerHighlightFail());
      }

      setQueried(true);
    };

    fetchPlayers();
  }, []);

  const player = useSelector(
    (state: RootState) => getPlayer(state, parseInt(numberStr, 10))
  );

  if (queried) {
    return <PlayerHighlight {...propsToJS({ player })} />;
  } else {
    return <div />;
  }
}

export default PlayerHighlightContainer;
