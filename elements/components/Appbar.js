import Link from "next/link";

import classes from "../../styles/css/appbar.module.css";

const Appbar = () => {
  return (
    <div className={classes.appbar}>
      <Link href='/'>
        <a><h1>Unidemy</h1></a>
      </Link>
    </div>
  );
};

export default Appbar;
