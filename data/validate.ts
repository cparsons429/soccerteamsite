import ajv from "ajv";

import { Schema } from "models/types";


const validate = (schema: Schema, json: any) => {
  return ajv().validate(schema, json);
};

export default validate;
