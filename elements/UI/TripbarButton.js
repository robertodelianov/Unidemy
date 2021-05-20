import { useDispatch, useSelector } from "react-redux";

import * as actions from "../../redux/actions/tripsActions";

import classes from '../../styles/css/tripbar-button.module.css';

const TripbarButton = ({ id, index }) => {
  const dispatch = useDispatch();
  const currentIndexButton = useSelector(state => state.index);

  const buttonIndex = index + 1;

  const handleButtonTrip = () => {
    dispatch(actions.changeTrip(id, buttonIndex));
  };

  const styles = currentIndexButton === buttonIndex ? `${classes['tripbar-button__active']}` : `${classes['tripbar-button__default']}` ;

  return <button type="button" onClick={handleButtonTrip} className={styles}>{buttonIndex}</button>;
};

export default TripbarButton;
