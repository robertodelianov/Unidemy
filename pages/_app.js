import React from "react";
import { Provider } from 'react-redux';

import "../styles/globals.css";

import useStore from '../redux/store';

import Appbar from "../elements/components/Appbar";
import Menu from "../elements/components/Menu";

function MyApp({ Component, pageProps }) {
  const store = useStore;

  return (
    <Provider store={store}>
      <Appbar />
      <Menu />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
