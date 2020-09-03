/**
 * @Author: colinparsons
 * @Date:   2020-08-21T16:47:03-07:00
 * @Last modified by:   colinparsons
 * @Last modified time: 2020-09-03T14:50:15-07:00
 * @License: License can be found in root directory at LICENSE.md, or at https://github.com/cparsons429/soccerteamsite/blob/master/LICENSE.md
 * @Copyright: Copyright (c) Colin Parsons @Last modified time. All rights reserved. Complete copyright information located in the License file (see above).
 */

import Link from "next/link";

import { Players } from "models/interfaces";

export const Pending = () => <div />;

export const Success: React.FC<Players> = props => {
  const presentationalPlayers = [];

  for (const [key, player] of Object.entries(props.list)) {
    presentationalPlayers.push(
      <li key={key}>
        <Link href="/roster/[id]" as={`/roster/${key}`}>
          <a>
            #{player.number} {player.name.first} {player.name.last}
          </a>
        </Link>
      </li>
    );
  }

  return (
    <div>
      <ul>{presentationalPlayers}</ul>
    </div>
  );
};

export const Fail = () => (
  <div>
    <p>
      Uh oh! There was an error communicating with our servers. Try again later?
    </p>
  </div>
);
