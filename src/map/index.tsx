import React from 'react'
import GoogleMapReact from 'google-map-react'
const location = {
  address: 'บ้านอยู่นี้ฮะ',
  lat: parseFloat(process.env.REACT_APP_LOCATION_LAT || '0'),
  lng: parseFloat(process.env.REACT_APP_LOCATION_LNG || '0'),
}
const LocationPin = ({ text }: any) => {
  const showInMapClicked = () => {
    window.open(process.env.REACT_APP_LOCATION_URL)
  }
  return <div onClick={() => showInMapClicked()}>{text}</div>
}
const Map = () => {
  const API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY
  return (
    <div style={{ height: '50vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: API_KEY }}
        defaultCenter={location}
        defaultZoom={16}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  )
}

export default Map
