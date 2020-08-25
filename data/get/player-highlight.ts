import { fromJS, getIn, setIn } from "immutable";

import axios from "axios";

import validatePlayerHighlight from "data/validate/player-highlight";


const getPlayerHighlight = async (id: string) => {
  try {
    const response = await axios.get
        ("https://randomuser.me/api/?results=20&seed=ef982b7030296251");

    const results = fromJS(response.data.results[parseInt(id, 10)]);
    let returnPlayer = fromJS({ });

    returnPlayer = setIn(returnPlayer, [ "number" ], parseInt(id, 10));
    returnPlayer = setIn(
      returnPlayer,
      [ "name", "first" ],
      getIn(results, ["name", "first"], null)
    );
    returnPlayer = setIn(
      returnPlayer,
      [ "name", "last" ],
      getIn(results, [ "name", "last" ], null)
    );
    returnPlayer = setIn(
      returnPlayer,
      ["pictureSrc"],
      getIn(results, [ "picture", "large"], null)
    );

    if (validatePlayerHighlight(returnPlayer)) {
      return returnPlayer;
    }
  } catch (err) { }

  return false;
};

export default getPlayerHighlight;
