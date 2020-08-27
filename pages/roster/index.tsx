/**
 * @Author: colinparsons
 * @Date:   2020-08-23T19:27:42-07:00
 * @Last modified by:   colinparsons
 * @Last modified time: 2020-08-27T13:58:38-07:00
 * @License: License can be found in root directory at LICENSE.md, or at https://github.com/cparsons429/soccerteamsite/blob/master/LICENSE.md
 * @Copyright: Copyright (c) Colin Parsons @Last modified time. All rights reserved.
 */

import Head from "next/head";

import Navigation from "components/presentational/navigation";
import RosterHeader from "components/presentational/roster-header";
import FullRosterContainer from "components/container/full-roster";

const Roster = () => (
  <div>
    <Head>
      <title>Kickers Roster</title>
    </Head>
    <Navigation />
    <RosterHeader />
    <FullRosterContainer />
  </div>
);

export default Roster;
