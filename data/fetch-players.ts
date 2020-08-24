import { useState, useEffect } from "react";

import { fromJS } from "immutable";

import { useDispatch, useSelector } from "react-redux";
import { fullRosterSuccess, fullRosterFail } from "redux/actions/players";
import { getPlayers } from "redux/selectors/players";

import axios from "axios";

import { Player } from "models/interfaces";


const usePlayers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const result = await axios
            .get("https://randomuser.me/api/?results=20&seed=ef982b7030296251");

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
      } catch (err) {
        dispatch(fullRosterFail());
      }
    };

    fetchPlayers();
  }, []);

  const [ players, setPlayers ] = useState();
  setPlayers(useSelector(getPlayers));

  return players;
};


export default usePlayers;
