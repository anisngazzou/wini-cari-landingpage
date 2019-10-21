
import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import markerPng from './KAR.png'
const MyMapComponent = compose(
  withProps({
    isMarkerShown:true,
 
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyDQ6tkAoMSO8ygMYmhuA9FrOTPVFJYKhqw",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{height: `400px`  }} />,
    mapElement: <div style={{ height: `100%`,borderRadius:`10%` }}
     />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  
  <GoogleMap defaultZoom={18} defaultCenter={{ lat: 35.867610, lng: 10.570907 }}>
    {props.isMarkerShown && (
      <Marker  clickable={true} position={{ lat: 35.867610, lng: 10.570907 }}  Label='BUS Software'  draggable={false} icon={markerPng}  /> 
    )}
    
  </GoogleMap>
 
));
export default MyMapComponent


