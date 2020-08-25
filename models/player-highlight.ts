const PlayerHighlightSchema = {
  "$schema": "https://tools.ietf.org/html/draft-handrews-json-schema-validation-00",
  "title": "PlayerHighlight",
  "type": "object",
  "properties": {
    "number": {
      "type": "integer"
    },
    "name": {
      "type": "object",
      "properties": {
        "first": {
          "type": "string"
        },
        "last": {
          "type": "string"
        }
      },
      "required": [ "first", "last" ],
      "additionalProperties": false
    },
    "pictureSrc": {
      "type": "string"
    }
  },
  "required": [ "number", "name", "pictureSrc" ],
  "additionalProperties": false
};

export default PlayerHighlightSchema;
