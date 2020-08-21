import React from "react";

import Link from "next/link";

import { Players } from "models/interfaces";


type Props = {
  players: Players;
};

const FullRoster: React.FC<Props> = props => {
  const { players } = props;

  return (
    <div>
      <ul>
        {players.list.map((player) => {
          return (
            <li key={player.name.last}>
              <Link href="/roster/[number]" as={`/roster/${player.number}`}>
                <a>#{player.number} {player.name.first} {player.name.last}</a>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  );
};

export default FullRoster;
