import { useState, useEffect } from "react";

import { fromJS, getIn } from "immutable";

import propsToJS from "helpers/props-to-js";

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
  const [ number ] = useState(parseInt(props.numberStr, 10));
  const [ queried, setQueried ] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=20&seed=ef982b7030296251")
    .then(results => (
      results.data
    )).then(data => {
      const returnPlayer = fromJS(data.results[number]);

      if (returnPlayer) {
        const returnPlayerMinimized = fromJS({
          number: number,
          name: getIn(returnPlayer, ["name"], null),
          pictureSrc: getIn(returnPlayer, ["picture", "medium"], null),
        });

        dispatch(playerHighlightSuccess()(returnPlayerMinimized));
      } else {
        dispatch(playerHighlightFail()());
      }

      setQueried(true);
    });
  });

  const player = useSelector(
    (state: RootState) => getPlayer(state, number)
  );

  if (queried) {
    return <PlayerHighlight {...propsToJS({ player })} />;
  } else {
    return <div />;
  }
}

export default PlayerHighlightContainer;
