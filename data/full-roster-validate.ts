import ajv from "ajv";

import FullRosterSchema from "models/full-roster";


const fullRosterValidate = (maybeFullRoster: any) => {
  return ajv().validate(FullRosterSchema, maybeFullRoster);
};

export default fullRosterValidate;
