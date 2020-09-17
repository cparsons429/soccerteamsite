/**
 * @Author: colinparsons
 * @Date:   2020-08-23T19:30:16-07:00
 * @Last modified by:   colinparsons
 * @Last modified time: 2020-09-17T09:06:26-07:00
 * @License: License can be found in root directory at LICENSE.md, or at https://github.com/cparsons429/soccerteamsite/blob/master/LICENSE.md
 * @Copyright: Copyright (c) Colin Parsons @Last modified time. All rights reserved. Complete copyright information located in the License file (see above).
 */

import Head from "next/head";
import { GetServerSideProps } from "next";

import Navigation from "components/presentational/navigation";
import RosterHeader from "components/presentational/roster-header";
import PlayerHighlightContainer from "components/container/player-highlight";

type Props = {
  id: string;
};

export const getServerSideProps: GetServerSideProps = async context => ({
  props: {
    id: context.params!.id
  }
});

const Profile = (props: Props) => (
  <div>
    <Head>
      <title>Kickers Roster</title>
    </Head>
    <Navigation />
    <RosterHeader />
    <PlayerHighlightContainer id={props.id} />
  </div>
);

export default Profile;
