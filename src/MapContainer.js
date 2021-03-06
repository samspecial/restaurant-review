import React, {
  useState,
  useCallback,
  useEffect
} from 'react';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow
} from '@react-google-maps/api';
import axios from 'axios';
import uuid from 'react-uuid';
import Rating from "@material-ui/lab/Rating";

import {
  usePosition
} from './Hooks/usePosition';
import locations from './nearByRestaurants';
import AddRestaurant from './components/AddRestaurant';
import RestaurantContainer from './components/RestaurantContainer';

import './reset.css';
import './App.css';
const libraries = ["places"]
const mapContainerStyle = {
  width: '65%',
  height: 'auto',
  position: 'relative'
}

const options = {
  disableDefaultUI: true,
  zoomControl: true
}

const MapContainer = () => {
  const {
      isLoaded,
    loadError
    } = useLoadScript({
      googleMapsApiKey: "AIzaSyBgFrVwcxGlSoiprURIx_iHcTNK6Ej3AAo",
      libraries
    })

  const [currentPosition, setCurrentPosition] = useState({});
  // Check if a location is clicked on the Map
  const [selected, setSelected] = useState(false);

  // State to load up local JSON data
  const [jsonRestaurants, addRestaurants] = useState(locations);

  //Set New Restaurant Coordinate
  const [lat, getLat] = useState(0)
  const [lng, getLng] = useState(0)

  // Filtering state for Ratings
  const [filterRating, setfilterRating] = useState({
    filterRatingValue: 5,
  });

  // Detecting the rating input change
  const onFilterRatingChange = (event) => {
    setfilterRating({
      filterRatingValue: event.target.value,
    });
  };

  const [feeds, setFeeds] = useState([])

  const onMapClick = (event) => {

    let lat = event.latLng.lat();
    let lng = event.latLng.lng();

    // Setting the clicked point states
    getLat(lat);
    getLng(lng);
    setSelected(!selected)

  };

  // Passing input to filter restaurant review
  const handleClose = event => {
    setOpen(false)
  }

  // Retrieving User Location
  const success = position => {
    const currentPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    }
    setCurrentPosition(currentPosition);

  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  })

  useEffect(() => {
    axios
      .get(
      `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${currentPosition.lat},${currentPosition.lng}&radius=2000&type=restaurant&key=AIzaSyBgFrVwcxGlSoiprURIx_iHcTNK6Ej3AAo`
      )
      .then((res) => {
        let Feeds = res.data.results;
        let allRestaurants = jsonRestaurants.concat(Feeds)
        setFeeds(allRestaurants);
      });
  }, [currentPosition.lat, currentPosition.lng]);


  if (loadError) return 'Error loading map'
  if (!isLoaded) return 'Loading Maps'

  return <div className="map-section" >
    <GoogleMap mapContainerStyle={mapContainerStyle}
      zoom={16}
      center={currentPosition}
      options={
        options
      }
      onClick={onMapClick}>
      {
        feeds.map((foodPlace, index) => {
          // Creating a position object using the lat and lng from the Places API
          const position = {
            lat: foodPlace.geometry.location.lat,
            lng: foodPlace.geometry.location.lng
          };
          return foodPlace.rating <= filterRating.filterRatingValue ? (< Marker icon={
            {
              path: "M7 0c-3.314 0-6 3.134-6 7 0 3.31 1.969 6.083 4.616 6.812l-0.993 16.191c-0.067 1.098 0.778 1.996 1.878 1.996h1c1.1 0 1.945-0.898 1.878-1.996l-0.993-16.191c2.646-0.729 4.616-3.502 4.616-6.812 0-3.866-2.686-7-6-7zM27.167 0l-1.667 10h-1.25l-0.833-10h-0.833l-0.833 10h-1.25l-1.667-10h-0.833v13c0 0.552 0.448 1 1 1h2.604l-0.982 16.004c-0.067 1.098 0.778 1.996 1.878 1.996h1c1.1 0 1.945-0.898 1.878-1.996l-0.982-16.004h2.604c0.552 0 1-0.448 1-1v-13h-0.833z",
              fillColor: "#375fc4",
              fillOpacity: 1.0,
              strokeWeight: 0,
              scale: 1,
            }
          }
            key={index}
            onClick={() => console.log("I have been clicked")}
            position={position}
          />) : null
        }
        )
      } {
        currentPosition.lat && (< Marker onClick={
          () => console.log("I have been clicked")
        }
          icon={
            "https://maps.google.com/mapfiles/ms/icons/blue-dot.png"
          }
          position={
            currentPosition
          }
        />)
      }
      {
        selected ? (< InfoWindow position={
          {
            lat: lat,
            lng: lng
          }
        }>
          <AddRestaurant
            addRestaurants={addRestaurants}
            feeds={feeds}
            setFeeds={setFeeds}
            location={
              { lat, lng }
            }
            jsonRestaurants={jsonRestaurants}
            onClose={() => { setSelected(!selected) }}
          />

        </InfoWindow>) : null}

    </GoogleMap>
    <div className="restaurant-group">
      <span className="restaurant-heading">
        <label htmlFor='restaurants'> Filter Nearby Restaurants by Review: </label>
        <Rating name="half-rating"
          precision={
            0.5
          }
          value={
            filterRating.filterRatingValue
          }
          onChange={onFilterRatingChange}
        />
      </span>

      < RestaurantContainer feeds={feeds} filterRating={filterRating.filterRatingValue} />

    </div>
  </div>
}

export default MapContainer;
