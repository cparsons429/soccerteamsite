import { fromJS, getIn, setIn } from "immutable";

import axios from "axios";

import validate from "data/validate";
import { PlayerHighlightData } from "models/schema";


const getPlayerHighlight = async (id: string) => {
  try {
    const response = await axios.get
        ("https://randomuser.me/api/?results=20&seed=ef982b7030296251");

    if (validate(PlayerHighlightData, response.data)) {
      const result = fromJS(response.data.results[parseInt(id, 10)]);
      let returnPlayer = fromJS({ });

      returnPlayer = setIn(returnPlayer, [ "number" ], parseInt(id, 10));
      returnPlayer = setIn(
        returnPlayer,
        [ "name", "first" ],
        getIn(result, ["name", "first"], null)
      );
      returnPlayer = setIn(
        returnPlayer,
        [ "name", "last" ],
        getIn(result, [ "name", "last" ], null)
      );
      returnPlayer = setIn(
        returnPlayer,
        ["pictureSrc"],
        getIn(result, [ "picture", "large"], null)
      );

      return returnPlayer;
    }
  } catch (err) { }

  return false;
};

export default getPlayerHighlight;
