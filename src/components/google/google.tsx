import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';
// const containerStyle = {
//     width: '400px',
//     height: '400px'
// };

const onLoad = (marker: any) => {
    console.log('marker: ', marker)
}

function Googlemap(props: any) {
    let {coordinate, containerStyle, zoom} = props
    if(containerStyle == null){
        containerStyle = {
            width: '400px',
            height: '400px'
        };
    }
    if(zoom == null)zoom = 17;
    console.log(props)
    return (
        <LoadScript
            googleMapsApiKey="AIzaSyD6Wut16Gy_rkfQPL7q4CCacKzkCijIeXs"
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={coordinate}
                zoom={zoom}
            >
            { /* Child components, such as markers, info windows, etc. */}
            <Marker
                onLoad={onLoad}
                position={coordinate}
            />
               
            </GoogleMap>
        </LoadScript >
    )
}

export default React.memo(Googlemap)