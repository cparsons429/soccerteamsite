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
