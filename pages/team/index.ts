/**
 * @Author: colinparsons
 * @Date:   2020-08-23T19:07:10-07:00
 * @Last modified by:   colinparsons
 * @Last modified time: 2020-09-03T16:34:59-07:00
 * @License: License can be found in root directory at LICENSE.md, or at https://github.com/cparsons429/soccerteamsite/blob/master/LICENSE.md
 * @Copyright: Copyright (c) Colin Parsons @Last modified time. All rights reserved. Complete copyright information located in the License file (see above).
 */

import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async context => {
  context.res.statusCode = 301;
  context.res.setHeader("Location", "/roster");
  context.res.end();

  return { props: {} };
};

const EmptyPage = () => {};

export default EmptyPage;
