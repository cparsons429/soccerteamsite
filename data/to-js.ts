/**
 * @Author: colinparsons
 * @Date:   2020-08-23T15:13:03-07:00
 * @Last modified by:   colinparsons
 * @Last modified time: 2020-09-03T08:09:28-07:00
 * @License: License can be found in root directory at LICENSE.md, or at https://github.com/cparsons429/soccerteamsite/blob/master/LICENSE.md
 * @Copyright: Copyright (c) Colin Parsons @Last modified time. All rights reserved. Complete copyright information located in the License file (see above).
 */

import { isImmutable } from "immutable";

type Props = {
  [key in string | number]: any;
};

const toJS = <T>(props: T): T => {
  if (isImmutable(props)) {
    return props.toJS() as T;
  } else if (typeof props === "object" && props !== null) {
    const isArray = Array.isArray(props);
    const initialProps: Props = isArray ? [] : {};

    const propsJS = Object.entries(props).reduce((newProps, [key, value]) => {
      const index = isArray ? Number(key) : key;
      newProps[index] = toJS(value);

      return newProps;
    }, initialProps);

    return propsJS as T;
  } else {
    return props;
  }
};

export default toJS;
