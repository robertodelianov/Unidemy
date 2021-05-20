import React from "react";
import { useSelector } from 'react-redux';
import Head from 'next/head';

import Trip from "../elements/components/Trip";
import Tripbar from "../elements/components/Tripbar";

import { client } from "../api/contentful";

const Trips = ({ trips }) => {
  const indexOfCurrentTrip = useSelector(state => state.index);

  return (
    <React.Fragment>
      <Head>
        <title>Unidemy-trips</title>
        <meta name='description' content='Nice trips from unidemy away from you just on click' />
      </Head>
      <Tripbar trips={trips}/>
      <div>
        {trips[indexOfCurrentTrip - 1] && <Trip item={trips[indexOfCurrentTrip - 1]}/>}
      </div>
    </React.Fragment>
  );
};

export const getStaticProps = async () => {
  const response = await client.getEntries({
    content_type: "trips",
  });
  const data = await response.items;

  return {
    props: {
      trips: data,
    },
  };
};

export default Trips;
