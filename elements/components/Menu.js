import Link from "next/link";

import classes from "../../styles/css/menu.module.css";

const Menu = () => {
  return (
    <nav className={classes["menu-container"]}>
      <div>
        <Link href="/">
          <a>HOME</a>
        </Link>
      </div>
      <div>
        <Link href="/books">
          <a>Books</a>
        </Link>
      </div>
      <div>
        <Link href="/trips">
          <a>Trips</a>
        </Link>
      </div>
    </nav>
  );
};

export default Menu;
