import { useState, useEffect } from "react";

import { getIn } from "immutable";

import toJS from "data/to-js";
import getFullRoster from "data/get/full-roster";
import validate from "data/validate";
import { FullRosterProps } from "models/schema";

import { useDispatch, useSelector } from "react-redux";
import { fullRosterSuccess, fullRosterFail } from "redux/actions/players";
import { getPlayersState } from "redux/selectors/players";

import FullRoster from "components/presentational/full-roster";

const FullRosterContainer = () => {
  const [queried, setQueried] = useState(false);
  const dispatch = useDispatch();
  const playersState = useSelector(getPlayersState);

  useEffect(() => {
    if (
      !validate(
        FullRosterProps(getIn(playersState, ["totalPlayers"], null)),
        toJS(playersState)
      )
    ) {
      const query = async () => {
        const returnPlayers = await getFullRoster();

        if (returnPlayers) {
          dispatch(
            fullRosterSuccess(
              getIn(returnPlayers, ["players"], null),
              getIn(returnPlayers, ["totalPlayers"], null)
            )
          );
        } else {
          dispatch(fullRosterFail());
        }

        setQueried(true);
      };

      query();
    } else {
      setQueried(true);
    }
  }, []);

  if (queried) {
    return <FullRoster {...toJS(playersState)} />;
  } else {
    return <div />;
  }
};

export default FullRosterContainer;
