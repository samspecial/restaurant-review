import React, { useState, useCallback, useEffect } from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import axios from 'axios';
import uuid from 'uuid'

import { usePosition } from './Hooks/usePosition';
import locations from './nearByRestaurants';
import Restaurant from './Restaurant';
import AddRestaurant from './components/AddRestaurant';
import SearchRestaurant from './components/SearchRestaurant';

const libraries = ["places"]
const mapContainerStyle = {
  width: '80vw',
  height: '80vh'
}

const options = {
  disableDefaultUI: true,
  zoomControl: true
}

const App1 = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries
  })

  // const { latitude, longitude, error } = usePosition();
  const [currentPosition, setCurrentPosition] = useState({});
  const [selected, setSelected] = useState(null);
  const [restaurants, addRestaurant] = useState(locations)
  const [markers, setMarkers] = useState([])
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [feeds, setFeeds] = useState([])

  const onMapClick = React.useCallback((event) => {
    setMarkers(current => [
      ...current, {
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
      }])
  }, [])

  // Passing input to filter restaurant review
  const handleChange = event => {
    setSearchTerm(event.target.value)
  }

  // Adding an ID manually to the locations array
  const setRestaurant = restaurant => {
    restaurant.id = restaurant.length + 1;
    addRestaurant([...restaurants, restaurant]);
  }


  // useEffect(() => {
  //   const result = restaurants.filter(locate => {
  //     console.log(locate)
  //     return locate
  //   })

  //   setSearchResult(result)

  // }, [searchTerm])
  const onSelect = foodPlace => {
    setSelected(foodPlace);
  }

  // Retrieving User Location
  const success = position => {
    const currentPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    }
    setCurrentPosition(currentPosition);
    console.log(currentPosition)
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  })
  useEffect(() => {
    console.log(currentPosition)
    axios
      .get(
      `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${currentPosition.lat},${currentPosition.lng}&radius=2000&type=restaurant&key=AIzaSyAKrsTZlN-C-eEq1D8nEwtSDnDd9xtknkI`
      )
      .then((res) => {
        let Feeds = res.data.results;
        console.log(Feeds);
        setFeeds(Feeds);
      });
  }, [currentPosition.lat, currentPosition.lng]);


  if (loadError) return 'Error loading map'
  if (!isLoaded) return 'Loading Maps'

  return <div className="map-section">
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={13}
      center={currentPosition}
      options={options}
      onClick={onMapClick}

    >
      {markers.map((marker, index) => (<Marker key={index} position={{ lat: marker.lat, lng: marker.lng }}
        onClick={() => { setSelected(marker) }}
      />))}
      {locations.map((foodPlace, index) => {
        // console.log('lat:', foodPlace.lat, 'long:', foodPlace.long);
        const position = {
          lat: foodPlace.lat,
          lng: foodPlace.long
        };
        return (<Marker
          icon={{
            path:
              "M7 0c-3.314 0-6 3.134-6 7 0 3.31 1.969 6.083 4.616 6.812l-0.993 16.191c-0.067 1.098 0.778 1.996 1.878 1.996h1c1.1 0 1.945-0.898 1.878-1.996l-0.993-16.191c2.646-0.729 4.616-3.502 4.616-6.812 0-3.866-2.686-7-6-7zM27.167 0l-1.667 10h-1.25l-0.833-10h-0.833l-0.833 10h-1.25l-1.667-10h-0.833v13c0 0.552 0.448 1 1 1h2.604l-0.982 16.004c-0.067 1.098 0.778 1.996 1.878 1.996h1c1.1 0 1.945-0.898 1.878-1.996l-0.982-16.004h2.604c0.552 0 1-0.448 1-1v-13h-0.833z",
            fillColor: "#375fc4",
            fillOpacity: 1.0,
            strokeWeight: 0,
            scale: 1,
          }}
          key={index} onClick={() => console.log("I have been clicked")} position={position} />)
      }
      )
      }
      {console.log(feeds)}
      {
        currentPosition.lat && (<Marker onClick={() => console.log("I have been clicked")}
          icon={"https://maps.google.com/mapfiles/ms/icons/blue-dot.png"}
          position={currentPosition}
        />)
      }
      {selected ?
        (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            clickable={true}
            onCloseClick={() => setSelected({})}
          >
            <AddRestaurant setRestaurant={setRestaurant} />

          </InfoWindow>
        ) : null
      }

    </GoogleMap>
    <div>
      <>
      <label htmlFor='restaurants'>Filter by Review:
        <select id='restaurants'
          onChange={handleChange}
        ><option value='all'>All</option>
          <option value='1'>1
          </option>
          <option value='2'>2
          </option>
          <option value='3'>3
          </option>
          <option value='4'>4
          </option>
          <option value='5'>5
          </option>
        </select>
      </label>
      </>
      <section>Hello: {
        feeds.map((foodPlace, index) => (
          <div key={index}>
            <h2>Name: {foodPlace.name}</h2>
            <h2>Business Status: {foodPlace.business_status}</h2>
            <h3>Address: {foodPlace.vicinity}</h3>
            <span><small>Latitude: {foodPlace.geometry.location.lat}</small><small> Longitude: {foodPlace.geometry.location.lng}</small></span>
            <h4>Place Id: {foodPlace.place_id}</h4>
          </div>
        ))
      }
      </section>
      {/* {
        searchResult.map((search, index) => (
          <div key={index}>
            <h2>Name: {search.restaurantName}</h2>
            <h3>Address: {search.address}</h3>
            <span><small>Latitude: {search.lat}</small><small> Longitude: {search.long}</small></span>
            {search.ratings.map((avrg, i) => (
              <div key={i}>Ratings:
        <h4>Star: {avrg.stars}</h4>
                <p>Comment: {avrg.comment}</p>
              </div>
            ))}
          </div>
        ))
      } */}
    </div>
  </div>
}

export default App1;