/**
 * @Author: colinparsons
 * @Date:   1985-10-26T01:15:00-07:00
 * @Last modified by:   colinparsons
 * @Last modified time: 2020-08-27T18:20:45-07:00
 * @License: License can be found in root directory at LICENSE.md, or at https://github.com/cparsons429/soccerteamsite/blob/master/LICENSE.md
 * @Copyright: Copyright (c) Colin Parsons @Last modified time. All rights reserved. Complete copyright information located in the License file (see above).
 */

import Head from "next/head";

import Navigation from "components/presentational/navigation";

import { Container } from "react-bootstrap";
import styles from "styles/index.module.css";

const Index = () => (
  <div>
    <Head>
      <title>Kickers Website</title>
    </Head>
    <Navigation />
    <Container className={styles.container}>
      <h1>Welcome to the Kickers website!</h1>
    </Container>
  </div>
);

export default Index;
