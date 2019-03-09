import React, {useState, useEffect, useContext} from 'react';
import {withStyles} from '@material-ui/core/styles';
import ReactMapGL, {NavigationControl, Marker} from 'react-map-gl';

import {MAP_BOX_KEY} from '../config';
import PinIcon from './PinIcon';
import Context from '../context';
import Blog from './Blog';
import {useClient} from '../client';
import {GET_PINS} from '../graphql/queries';
import {getPriority} from 'os';

// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";
// import DeleteIcon from "@material-ui/icons/DeleteTwoTone";
const INITIAL_VIEWPORT = {
  latitude: 30.698972,
  longitude: 76.843102,
  zoom: 13,
};
const Map = ({classes}) => {
  const client = useClient ();
  const {state, dispatch} = useContext (Context);
  useEffect (() => {
    getPins ();
  }, []);
  const [viewPort, setViewPort] = useState (INITIAL_VIEWPORT);
  const [userPosition, setUserPosition] = useState (null);
  useEffect (() => {
    getUserPosition ();
  }, []);
  console.log ({userPosition});
  console.log ({draft: state.draft});

  const getUserPosition = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition (({coords}) => {
        const {latitude, longitude} = coords;
        setViewPort ({...viewPort, latitude, longitude});
        setUserPosition ({latitude, longitude});
      });
    }
  };
  const getPins = async () => {
    const {getPins} = await client.request (GET_PINS);
    dispatch ({type: 'GET_PINS', payload: getPins});
  };
  const handleMapClick = ({lngLat, leftButton}) => {
    console.log ('clicked');
    if (!leftButton) return;
    if (!state.draft) {
      dispatch ({type: 'CREATE_DRAFT'});
    }
    const [longitude, latitude] = lngLat;
    dispatch ({
      type: 'UPDATE_DRAFT_LOCATION',
      payload: {latitude, longitude},
    });
  };
  return (
    <div className={classes.root}>
      <ReactMapGL
        width="100vw"
        height="calc(100vh - 64px)"
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxApiAccessToken={MAP_BOX_KEY}
        onViewportChange={newViewPort => setViewPort (newViewPort)}
        onClick={handleMapClick}
        {...viewPort}
      >
        {/* Navigation Control */}
        <div className={classes.navigationControl}>
          <NavigationControl
            onViewportChange={newViewPort => setViewPort (newViewPort)}
          />
        </div>
        {/* Pin for users current location */}
        {userPosition &&
          <Marker offsetLeft={-19} offsetTop={-37} {...userPosition}>
            <PinIcon size={40} color="red" />
          </Marker>}
        {/* draft pin */}
        {state.draft &&
          <Marker offsetLeft={-19} offsetTop={-37} {...state.draft}>
            <PinIcon size={40} color="hotpink" />
          </Marker>}

        {/* Created Pins */}
        {state.pins.map (pin => (
          <Marker
            key={pin._id}
            offsetLeft={-19}
            offsetTop={-37}
            latitude={pin.latitude}
            longitude={pin.longitude}
          >
            <PinIcon size={40} color="darkblue" />
          </Marker>
        ))}
      </ReactMapGL>
      {/* Blog area to add pin content */}
      <Blog />
    </div>
  );
};

const styles = {
  root: {
    display: 'flex',
  },
  rootMobile: {
    display: 'flex',
    flexDirection: 'column-reverse',
  },
  navigationControl: {
    position: 'absolute',
    top: 0,
    left: 0,
    margin: '1em',
  },
  deleteIcon: {
    color: 'red',
  },
  popupImage: {
    padding: '0.4em',
    height: 200,
    width: 200,
    objectFit: 'cover',
  },
  popupTab: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
};

export default withStyles (styles) (Map);
