import Head from "next/head";
import { GetServerSideProps } from "next";

import Navigation from "components/presentational/navigation";
import RosterHeader from "components/presentational/roster-header";
import PlayerHighlightContainer from "components/container/player-highlight";

type Props = {
  id: string;
};

export const getServerSideProps: GetServerSideProps = async context => {
  const { params } = context;

  return {
    props: {
      id: params!.id
    }
  };
};

const Profile: React.FC<Props> = props => {
  const { id } = props;

  return (
    <div>
      <Head>
        <title>Kickers Roster</title>
      </Head>
      <Navigation />
      <RosterHeader />
      <PlayerHighlightContainer id={id} />
    </div>
  );
};

export default Profile;
