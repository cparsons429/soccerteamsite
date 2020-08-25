import ajv from "ajv";

import FullRosterSchema from "models/full-roster";


const validateFullRoster = (maybeFullRoster: any) => {
  return ajv().validate(FullRosterSchema, maybeFullRoster);
};

export default validateFullRoster;
