/**
 * @Author: colinparsons
 * @Date:   2020-08-21T16:37:30-07:00
 * @Last modified by:   colinparsons
 * @Last modified time: 2020-09-06T10:55:07-07:00
 * @License: License can be found in root directory at LICENSE.md, or at https://github.com/cparsons429/soccerteamsite/blob/master/LICENSE.md
 * @Copyright: Copyright (c) Colin Parsons @Last modified time. All rights reserved. Complete copyright information located in the License file (see above).
 */

export interface Counter {
  handleIncrement(step?: number): void;
  handleDecrement(step?: number): void;
  count: number;
}

export interface Name {
  first: string;
  last: string;
}

export interface Player {
  number: number;
  name: Name;
  pictureSrc?: URL;
}

export interface Players {
  list: {
    [id: string]: Player;
  };
}
