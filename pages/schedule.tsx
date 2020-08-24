import Head from "next/head";

import Navigation from "components/presentational/navigation";


const Schedule = () => (
  <div>
    <Head>
      <title>Kickers Schedule</title>
    </Head>
    <Navigation />
    <div>
      <h2>Upcoming games</h2>
      <ul>
        <li>8/20 @ Bruisers</li>
        <li>8/24 @ Sweaty Ballsacks</li>
        <li>8/28 vs United</li>
      </ul>
    </div>
  </div>
);

export default Schedule;
