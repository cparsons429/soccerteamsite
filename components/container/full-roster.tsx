import { useState, useEffect } from "react";

import propsToJS from "data/props-to-js";
import getFullRoster from "data/get/full-roster";
import validate from "data/validate";
import { FullRosterProps } from "models/schema";

import { useDispatch, useSelector } from "react-redux";
import { fullRosterSuccess, fullRosterFail } from "redux/actions/players";
import { getPlayers } from "redux/selectors/players";

import FullRoster from "components/presentational/full-roster";


const FullRosterContainer = () => {
  const [ queried, setQueried ] = useState(false);
  const dispatch = useDispatch();
  const players = useSelector(getPlayers);

  useEffect(() => {
    if (!validate(FullRosterProps, propsToJS(players))) {
      const query = async () => {
        const returnPlayers = await getFullRoster();

        if (returnPlayers) {
          dispatch(fullRosterSuccess(returnPlayers));
        } else {
          dispatch(fullRosterFail());
        }

        setQueried(true);
      }

      query();
    } else {
      setQueried(true);
    }
  }, []);

  if (queried) {
    return <FullRoster {...propsToJS({ players })} />;
  } else {
    return <div />;
  }
};

export default FullRosterContainer;
