import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import { useSelector } from 'react-redux';
import tw from 'tailwind-react-native-classnames';
import { selectDestination, selectOrigin } from '../slices/navSlice';
// import MapViewDirections from 'react-native-maps-directions';

const Map = () => {

    const origin=useSelector(selectOrigin);
    const destination=useSelector(selectDestination);

    return (
            <MapView
                style={tw`flex-1`}
                mapType='mutedStandard'
                initialRegion={{
                    latitude: 37.78825,
                    // latitude:origin.location.lat,
                    longitude: -122.4324,
                    // longitude:origin.location.lng,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
             {//origin && destination && (
                // <MapViewDirections
                // origin={origin.description}
                // destination={destination.description}
                // apikey='jdfshkfjh'
                // strokeWidth={3}
                // strokeColor='black'
                // />
            // )
        }
                {origin.location && <Marker
                coordinate={{
                    latitude: 37.78825,
                    // latitude:origin.location.lat,
                    longitude: -122.4324,
                    // longitude:origin.location.lng 
                }}
                title='Origin'
                description='Hehe heheh hehe'
                // description={origin.description}
                />}
            </MapView>
    )
}

export default Map

const styles = StyleSheet.create({})
