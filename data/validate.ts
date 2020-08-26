import ajv from "ajv";
import { JSONSchema7Type } from "json-schema";


const validate = (schema: JSONSchema7Type | boolean, json: any) => {
  if (typeof schema === "boolean") {
    return schema;
  }
  
  return ajv().validate(schema as object, json);
};

export default validate;
