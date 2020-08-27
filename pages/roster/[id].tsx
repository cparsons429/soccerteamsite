/**
 * @Author: colinparsons
 * @Date:   2020-08-23T19:30:16-07:00
 * @Last modified by:   colinparsons
 * @Last modified time: 2020-08-27T13:58:35-07:00
 * @License: License can be found in root directory at LICENSE.md, or at https://github.com/cparsons429/soccerteamsite/blob/master/LICENSE.md
 * @Copyright: Copyright (c) Colin Parsons @Last modified time. All rights reserved.
 */

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
