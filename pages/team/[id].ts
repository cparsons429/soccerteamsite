import { GetServerSideProps } from "next";


export const getServerSideProps: GetServerSideProps = async context => {
  const { res, params } = context;

  res.statusCode = 301;
  res.setHeader("Location", `/roster/${params!.id}`);
  res.end();

  return { props: {} };
}

const EmptyPage = () => {};

export default EmptyPage;
