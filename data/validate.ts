/**
 * @Author: colinparsons
 * @Date:   2020-08-25T10:46:23-07:00
 * @Last modified by:   colinparsons
 * @Last modified time: 2020-09-17T08:31:31-07:00
 * @License: License can be found in root directory at LICENSE.md, or at https://github.com/cparsons429/soccerteamsite/blob/master/LICENSE.md
 * @Copyright: Copyright (c) Colin Parsons @Last modified time. All rights reserved. Complete copyright information located in the License file (see above).
 */

import ajv from "ajv";
import { JSONSchema7Type } from "json-schema";

const validate = (schema: JSONSchema7Type, json: any) => {
  if (!ajv().validate(schema as object, json)) {
    throw new Error(
      "JSON failed validation test with structure:\n".concat(
        json,
        "\nand schema:\n",
        schema === null ? "null" : schema.toString()
      )
    );
  }
};

export default validate;
