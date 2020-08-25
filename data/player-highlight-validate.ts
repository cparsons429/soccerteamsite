import ajv from "ajv";

import PlayerHighlightSchema from "models/player-highlight";


const playerHighlightValidate = (maybePlayerHighlight: any) => {
  return ajv().validate(PlayerHighlightSchema, maybePlayerHighlight);
};

export default playerHighlightValidate;
