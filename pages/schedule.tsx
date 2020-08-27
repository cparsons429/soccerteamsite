/**
 * @Author: colinparsons
 * @Date:   2020-08-23T18:56:40-07:00
 * @Last modified by:   colinparsons
 * @Last modified time: 2020-08-27T13:59:00-07:00
 * @License: License can be found in root directory at LICENSE.md, or at https://github.com/cparsons429/soccerteamsite/blob/master/LICENSE.md
 * @Copyright: Copyright (c) Colin Parsons @Last modified time. All rights reserved.
 */

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
