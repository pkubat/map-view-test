import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { MapView } from 'react-native-maps';


class MapScreen extends React.Component {
  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <Text>Map Screen</Text>
         <MapView
           style = {{ flex: 1 }}
           showsUserLocation = { true }
           initialRegion={{
             latitude: 42.8051621,
             longitude: -70.868148,
             latitudeDelta: 0.0922,
             longitudeDelta: 0.0421,
           }}
         />
      </ScrollView>
    );
  }
}


export default MapScreen;
