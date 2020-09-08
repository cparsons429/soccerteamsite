/**
 * @Author: colinparsons
 * @Date:   2020-09-05T13:16:33-07:00
 * @Last modified by:   colinparsons
 * @Last modified time: 2020-09-08T13:57:49-07:00
 * @License: License can be found in root directory at LICENSE.md, or at https://github.com/cparsons429/soccerteamsite/blob/master/LICENSE.md
 * @Copyright: Copyright (c) Colin Parsons @Last modified time. All rights reserved. Complete copyright information located in the License file (see above).
 */
import { Button } from "react-bootstrap";

import { Counter } from "models/interfaces";

type CounterProps = {
  counter: Counter;
};

const CounterPresentation: React.FC<CounterProps> = props => (
  <div>
    <Button onClick={() => props.counter.handleIncrement(2)}>
      Increment by 2
    </Button>
    <Button onClick={() => props.counter.handleDecrement()}>
      Decrement by 1
    </Button>
    <div>
      <p>The count is {props.counter.count}!</p>
    </div>
  </div>
);

export default CounterPresentation;
