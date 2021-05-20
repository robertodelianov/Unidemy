import Head from 'next/head';

import Book from "../../elements/components/Book";

import { client } from "../../api/contentful";

const Books = ({ books }) => {
  return (
    <div className="container">
      <Head>
        <title>Unidemy-books</title>
        <meta name='description' content='Huge box of books to get out of your comfort zone by Unidemy.' />
      </Head>
      {books.map((item, index) => (
        <Book key={index} item={item} />
      ))}
    </div>
  );
};

export const getStaticProps = async () => {
  const response = await client.getEntries({
    content_type: "unidemy",
  });
  const data = await response.items;

  return {
    props: {
      books: data,
    },
  };
};

export default Books;
