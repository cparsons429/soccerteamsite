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
