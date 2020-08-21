import React from "react";

import { fromJS } from "immutable";
import withImmutablePropsToJS from "with-immutable-props-to-js";

import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { fullRosterSuccess } from "redux/actions/players";
import { getPlayers } from "redux/selectors/players";

import axios from "axios";

import FullRoster from "components/presentational/full-roster";

import { Player } from "models/interfaces";
import { RootState, RootAction } from "models/types";


// type Props = { };

// const FullRosterContainer: React.FC<Props> = props => { };
