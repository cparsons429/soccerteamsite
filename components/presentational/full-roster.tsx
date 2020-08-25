import Link from "next/link";

import { Players } from "models/interfaces";


type Props = {
  players: Players;
};

const FullRoster: React.FC<Props> = props => {
  const { players } = props;

  const presentationalPlayers = [];

  for (const [ key, player ] of Object.entries(players.list)) {
    presentationalPlayers.push(
      <li key={key}>
        <Link href="/roster/[id]" as={`/roster/${key}`}>
          <a>#{player.number} {player.name.first} {player.name.last}</a>
        </Link>
      </li>
    )
  }

  return (
    <div>
      <ul>
        {presentationalPlayers}
      </ul>
    </div>
  );
};

export default FullRoster;
