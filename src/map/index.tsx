import React from 'react'
import GoogleMapReact from 'google-map-react'
const location = {
  address: 'บ้านอยู่นี้ฮะ',
  lat: 14.338179856140703,
  lng: 99.59958754000367,
}
const LocationPin = ({ text }: any) => {
  const showInMapClicked = () => {
    window.open(`https://maps.google.com?q=${location.lat},${location.lng}`)
  }
  return <div onClick={() => showInMapClicked()}>{text}</div>
}
const Map = () => {
  //   const navigate = useNavigate()

  const API_KEY = 'AIzaSyCnZebrP0hpsYdah1rimad95cc_zB24xzc'
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
