import Head from "next/head";
import { GetServerSideProps } from "next";

import Navigation from "components/presentational/navigation";
import RosterHeader from "components/presentational/roster-header";
import PlayerHighlightContainer from "components/container/player-highlight";


type Props = {
  numberStr: string;
};

export const getServerSideProps: GetServerSideProps = async context => {
  const { params } = context;

  return {
    props: {
      numberStr: params!.number,
    }
  };
};

const Profile: React.FC<Props> = props => {
  const { numberStr } = props;

  return (
    <div>
      <Head>
        <title>Kickers Roster</title>
      </Head>
      <Navigation />
      <RosterHeader />
      <PlayerHighlightContainer numberStr={numberStr} />
    </div>
  );
};

export default Profile;
