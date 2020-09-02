/**
 * @Author: colinparsons
 * @Date:   2020-08-21T16:47:03-07:00
 * @Last modified by:   colinparsons
 * @Last modified time: 2020-09-02T09:34:03-07:00
 * @License: License can be found in root directory at LICENSE.md, or at https://github.com/cparsons429/soccerteamsite/blob/master/LICENSE.md
 * @Copyright: Copyright (c) Colin Parsons @Last modified time. All rights reserved. Complete copyright information located in the License file (see above).
 */

import Link from "next/link";

import { Player } from "models/interfaces";

export const Pending = () => <div />;

type SuccessProps = {
  player: Player;
};

export const Success: React.FC<SuccessProps> = props => {
  const { player } = props;

  return (
    <div>
      <h3>
        {player.name.first} {player.name.last} (#{player.number})
      </h3>
      <div className="picdiv">
        <img src={player.pictureSrc!.toString()} />
      </div>
      <Link href="/roster">
        <a>Back</a>
      </Link>
    </div>
  );
};

export const Fail = () => (
  <div>
    <div>
      <p>Sorry, but the player was not found.</p>
    </div>
    <Link href="/roster">
      <a>Back</a>
    </Link>
  </div>
);
