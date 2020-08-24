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
      <Link href="/"><a>Take me back home</a></Link>
    </div>
  </div>
);

export default NotFound;
