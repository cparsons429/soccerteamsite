import { fromJS, getIn, setIn } from "immutable";

import axios from "axios";

import validate from "data/validate";
import { FullRosterData } from "models/schema";


const getFullRoster = async () => {
  try {
    const response = await axios.get
        ("https://randomuser.me/api/?results=20&seed=ef982b7030296251");

    if (validate(FullRosterData, response.data)) {
      const results = fromJS(response.data.results);
      let returnPlayers = fromJS({ });

      for (let i = 0; i < results.size; i++) {
        returnPlayers = setIn(
          returnPlayers,
          [ "list", i.toString(), "number" ],
          i
        );
        returnPlayers = setIn(
          returnPlayers,
          [ "list", i.toString(), "name", "first"],
          getIn(results, [ i, "name", "first"], null)
        );
        returnPlayers = setIn(
          returnPlayers,
          [ "list", i.toString(), "name", "last"],
          getIn(results, [ i, "name", "last"], null)
        );
      }

      return returnPlayers;
    }
  } catch (err) { }

  return false;
};

export default getFullRoster;
