import { useState, useEffect } from "react";

import { fromJS } from "immutable";

import propsToJS from "data/props-to-js";

import { useDispatch, useSelector } from "react-redux";
import { fullRosterSuccess } from "redux/actions/players";
import { getPlayers } from "redux/selectors/players";

import axios from "axios";

import FullRoster from "components/presentational/full-roster";

import { Player } from "models/interfaces";


const FullRosterContainer = () => {
  const [ queried, setQueried ] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPlayers = async () => {
      const result = await axios.get
          ("https://randomuser.me/api/?results=20&seed=ef982b7030296251");

      const returnPlayers = fromJS(
        {
          list:
            result.data.results.map((player: Player, number: number) => ({
              number: number,
              name: {
                first: player.name.first,
                last: player.name.last,
              },
            })),
        }
      );

      dispatch(fullRosterSuccess(returnPlayers));
      setQueried(true);
    };

    fetchPlayers();
  }, []);

  const players = useSelector(getPlayers);

  if (queried) {
    return <FullRoster {...propsToJS({ players })} />;
  } else {
    return <div />;
  }
};

export default FullRosterContainer;
