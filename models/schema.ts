/**
 * @Author: colinparsons
 * @Date:   2020-08-25T10:30:28-07:00
 * @Last modified by:   colinparsons
 * @Last modified time: 2020-08-27T13:58:10-07:00
 * @License: License can be found in root directory at LICENSE.md, or at https://github.com/cparsons429/soccerteamsite/blob/master/LICENSE.md
 * @Copyright: Copyright (c) Colin Parsons @Last modified time. All rights reserved.
 */

export const FullRosterData = () => ({
  $schema: "http://json-schema.org/draft-07/schema#",
  type: "object",
  properties: {
    results: {
      type: "array",
      items: {
        type: "object",
        properties: {
          name: {
            type: "object",
            properties: {
              first: {
                type: "string"
              },
              last: {
                type: "string"
              }
            },
            required: ["first", "last"]
          }
        },
        required: ["name"]
      }
    }
  },
  required: ["results"]
});

export const PlayerHighlightData = () => ({
  $schema: "http://json-schema.org/draft-07/schema#",
  type: "object",
  properties: {
    results: {
      type: "array",
      items: {
        type: "object",
        properties: {
          name: {
            type: "object",
            properties: {
              first: {
                type: "string"
              },
              last: {
                type: "string"
              }
            },
            required: ["first", "last"]
          },
          picture: {
            type: "object",
            properties: {
              large: {
                type: "string"
              }
            },
            required: ["large"]
          }
        },
        required: ["name", "picture"]
      }
    }
  },
  required: ["results"]
});

export const FullRosterProps = (playersListSize: number | null) => {
  if (playersListSize === null) {
    return false;
  } else {
    return {
      $schema: "http://json-schema.org/draft-07/schema#",
      type: "object",
      properties: {
        players: {
          type: "object",
          properties: {
            list: {
              type: "object",
              additionalProperties: {
                type: "object",
                properties: {
                  number: {
                    type: "integer"
                  },
                  name: {
                    type: "object",
                    properties: {
                      first: {
                        type: "string"
                      },
                      last: {
                        type: "string"
                      }
                    },
                    required: ["first", "last"]
                  },
                  pictureSrc: {
                    type: "string"
                  }
                },
                required: ["number", "name"]
              },
              minProperties: playersListSize,
              maxProperties: playersListSize
            }
          },
          required: ["list"]
        },
        totalPlayers: {
          type: "integer"
        }
      },
      required: ["players", "totalPlayers"]
    };
  }
};

export const PlayerHighlightProps = () => ({
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "PlayerHighlight",
  type: "object",
  properties: {
    number: {
      type: "integer"
    },
    name: {
      type: "object",
      properties: {
        first: {
          type: "string"
        },
        last: {
          type: "string"
        }
      },
      required: ["first", "last"]
    },
    pictureSrc: {
      type: "string"
    }
  },
  required: ["number", "name", "pictureSrc"]
});
