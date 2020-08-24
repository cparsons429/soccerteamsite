import React, { useState, useEffect } from "react";

import { fromJS } from "immutable";

import propsToJS from "helpers/props-to-js";

import { useDispatch, useSelector } from "react-redux";
import { fullRosterSuccess } from "redux/actions/players";
import { getPlayers } from "redux/selectors/players";

import axios from "axios";

import FullRoster from "components/presentational/full-roster";

import { Player } from "models/interfaces";


type Props = { };

const FullRosterContainer: React.FC<Props> = () => {
  const [ queried, setQueried ] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=20&seed=ef982b7030296251")
    .then(results => (
      results.data
    )).then(data => {
      const returnPlayers = fromJS(
        {
          list:
            data.results.map((player: Player, number: number) => ({
              number: number,
              name: player.name
            }))
        }
      );

      dispatch(fullRosterSuccess()(returnPlayers));

      setQueried(true);
    });
  });

  const players = useSelector(getPlayers);

  if (queried) {
    return <FullRoster {...propsToJS({ players })} />;
  } else {
    return <div />;
  }
};

export default FullRosterContainer;
