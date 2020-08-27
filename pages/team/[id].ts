/**
 * @Author: colinparsons
 * @Date:   2020-08-23T19:09:44-07:00
 * @Last modified by:   colinparsons
 * @Last modified time: 2020-08-27T13:58:42-07:00
 * @License: License can be found in root directory at LICENSE.md, or at https://github.com/cparsons429/soccerteamsite/blob/master/LICENSE.md
 * @Copyright: Copyright (c) Colin Parsons @Last modified time. All rights reserved.
 */

import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async context => {
  const { res, params } = context;

  res.statusCode = 301;
  res.setHeader("Location", `/roster/${params!.id}`);
  res.end();

  return { props: {} };
};

const EmptyPage = () => {};

export default EmptyPage;
