import Link from "next/link";

import { Player } from "models/interfaces";

type Props = {
  player: Player;
};

const PlayerHighlight: React.FC<Props> = props => {
  const { player } = props;

  if (player) {
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
  } else {
    return (
      <div>
        <div>
          <p>Sorry, but the player was not found.</p>
        </div>
        <Link href="/roster">
          <a>Back</a>
        </Link>
      </div>
    );
  }
};

export default PlayerHighlight;
