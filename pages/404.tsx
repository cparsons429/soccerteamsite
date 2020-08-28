/**
 * @Author: colinparsons
 * @Date:   2020-08-23T18:53:09-07:00
 * @Last modified by:   colinparsons
 * @Last modified time: 2020-08-27T18:20:42-07:00
 * @License: License can be found in root directory at LICENSE.md, or at https://github.com/cparsons429/soccerteamsite/blob/master/LICENSE.md
 * @Copyright: Copyright (c) Colin Parsons @Last modified time. All rights reserved. Complete copyright information located in the License file (see above).
 */

import Head from "next/head";
import Link from "next/link";

import Navigation from "components/presentational/navigation";

const NotFound = () => (
  <div>
    <Head>
      <title>Kickers Website</title>
    </Head>
    <Navigation />
    <div>
      <h2>Uh oh! File not found.</h2>
      <Link href="/">
        <a>Take me back home</a>
      </Link>
    </div>
  </div>
);

export default NotFound;
