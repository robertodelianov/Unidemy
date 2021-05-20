import React from "react";

import { Map, GoogleApiWrapper } from "google-maps-react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import classes from "../../styles/css/trip.module.css";

const Trip = (props) => {
  const { location, destination, information, available } = props.item.fields;
  const imageFile = props.item.fields.imageFile.fields.file.url;
  const infoRendered = documentToReactComponents(information);

  return (
    <React.Fragment>
      <div className={classes["trip-container"]}>
        <h1>{destination}</h1>
        <img src={imageFile} alt="imageResorts" width="800" height="600" />
        <div>{infoRendered}</div>
        <span
          className={
            available ? classes["available-trip"] : classes["notavailable-trip"]
          }
        >
          {available ? "AVAILABLE" : "NOT AVAILABLE"}
        </span>
      </div>
      <Map
        google={props.google}
        zoom={14}
        className={classes["map-google-container"]}
        initialCenter={{
          lat: location.lat,
          lng: location.lon,
        }}
      />
    </React.Fragment>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyA9RC-CrWXXY6mB_0aKwQ8AAtfN04EK1-w",
})(Trip);
