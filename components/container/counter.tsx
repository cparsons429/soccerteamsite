/**
 * @Author: colinparsons
 * @Date:   2020-09-05T13:16:26-07:00
 * @Last modified by:   colinparsons
 * @Last modified time: 2020-09-06T10:56:59-07:00
 * @License: License can be found in root directory at LICENSE.md, or at https://github.com/cparsons429/soccerteamsite/blob/master/LICENSE.md
 * @Copyright: Copyright (c) Colin Parsons @Last modified time. All rights reserved. Complete copyright information located in the License file (see above).
 */
import { fromJS } from "immutable";

import toJS from "data/to-js";

import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "redux/actions";
import { getCount } from "redux/selectors";

import CounterPresentation from "components/presentational/counter";

const CounterContainer = () => {
  const dispatch = useDispatch();
  const count = useSelector(getCount);

  const counter = fromJS({
    handleIncrement: (step?: number) => dispatch(increment(step)),
    handleDecrement: (step?: number) => dispatch(decrement(step)),
    count
  });

  return <CounterPresentation {...toJS(counter)} />;
};

export default CounterContainer;
