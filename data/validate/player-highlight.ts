import ajv from "ajv";

import PlayerHighlightSchema from "models/schema/player-highlight";


const validatePlayerHighlight = (maybePlayerHighlight: any) => {
  return ajv().validate(PlayerHighlightSchema, maybePlayerHighlight);
};

export default validatePlayerHighlight;
