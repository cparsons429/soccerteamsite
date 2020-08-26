import { StateType, ActionType } from "typesafe-actions";


export type RootAction = ActionType<typeof
    import("redux/actions/index").default>;

export type RootState = StateType<ReturnType<typeof
    import("redux/reducers/index").default>>;
