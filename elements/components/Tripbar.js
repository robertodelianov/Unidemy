import classes from "../../styles/css/tripbar.module.css";

import TripbarButton from "../UI/TripbarButton";

const Tripbar = ({ trips }) => {
  return (
    <div className={classes["tripbar-container"]}>
      <nav className={classes.tripbar}>
        {trips.map((item, index) => (
            <TripbarButton key={index} id={item.sys.id} index={index} />
        ))}
      </nav>
    </div>
  );
};

export default Tripbar;
