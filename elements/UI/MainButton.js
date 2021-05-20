import Link from "next/link";

import classes from "../../styles/css/main-button.module.css";

const MainButton = () => {
  return (
    <Link href='/books'>
      <button className={classes["main-button"]}>GO TO BOOKS</button>
    </Link>
  );
};

export default MainButton;
