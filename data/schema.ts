/**
 * @Author: colinparsons
 * @Date:   2020-08-25T10:30:28-07:00
 * @Last modified by:   colinparsons
 * @Last modified time: 2020-09-02T16:04:35-07:00
 * @License: License can be found in root directory at LICENSE.md, or at https://github.com/cparsons429/soccerteamsite/blob/master/LICENSE.md
 * @Copyright: Copyright (c) Colin Parsons @Last modified time. All rights reserved. Complete copyright information located in the License file (see above).
 */

export const FullRoster = {
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
};

export const PlayerHighlight = {
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
};
