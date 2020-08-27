import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async context => {
  const { res } = context;

  res.statusCode = 301;
  res.setHeader("Location", "/roster");
  res.end();

  return { props: {} };
};

const EmptyPage = () => {};

export default EmptyPage;
