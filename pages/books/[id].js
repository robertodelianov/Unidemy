import { Fragment } from "react";
import Head from "next/head";

import { client } from "../../api/contentful";

const Preview = ({ book }) => {
  const { title, price, description } = book.fields;
  const imageFile = book.fields.imageFile.fields.file.url;

  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <div className="container">
        <h3>{title}</h3>
        <img src={imageFile} />
        <p>{description}</p>
        <h1>PRICE: ${price}</h1>
      </div>
    </Fragment>
  );
};

export const getStaticPaths = async () => {
  const response = await client.getEntries();
  const data = await response.items;
  const ArrayOfAllId = data.map((item) => {
    return { params: { id: item.sys.id } };
  });

  return {
    fallback: false,
    paths: ArrayOfAllId,
  };
};

export const getStaticProps = async (context) => {
  const responseData = await client.getEntry(context.params.id);

  return {
    props: {
      book: responseData,
    },
  };
};

export default Preview;
