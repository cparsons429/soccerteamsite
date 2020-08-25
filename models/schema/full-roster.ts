const FullRosterSchema = {
  "$schema": "https://tools.ietf.org/html/draft-handrews-json-schema-validation-00",
  "title": "FullRoster",
  "type": "object",
  "properties": {
    "list": {
      "type": "object",
      "additionalProperties": {
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
        "required": [ "number", "name" ],
        "additionalProperties": false
      }
    }
  },
  "required": [ "list" ]
};

export default FullRosterSchema;
