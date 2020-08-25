import { StateType, ActionType } from "typesafe-actions";

import * as schema from "models/schema";


export type RootAction = ActionType<typeof
    import("redux/actions/index").default>;

export type RootState = StateType<ReturnType<typeof
    import("redux/reducers/index").default>>;

export type Schema = typeof schema.FullRosterData |
    typeof schema.PlayerHighlightData |
    typeof schema.FullRosterProps |
    typeof schema.PlayerHighlightProps;
