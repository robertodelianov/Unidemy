import { Fragment } from "react";
import Head from "next/head";

import MainButton from "../elements/UI/MainButton";

const Home = () => {
  return (
    <Fragment>
      <Head>
        <title>Unidemy</title>
        <meta name="description" content="Huge box of books and trips." />
      </Head>
      <div className="container">
        <h1>WELCOME to Unidemy,</h1>
        <MainButton />
        <style jsx>
          {`
            h1 {
              letter-spacing: 5px;
            }
          `}
        </style>
      </div>
    </Fragment>
  );
};

export default Home;
