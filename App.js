/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import MapView from 'react-native-maps';
import { createDrawerNavigator, createStackNavigator, createAppContainer } from "react-navigation";

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>Home Screen</Text>
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
      </View>
    );
  }
}


import MapScreen from './src/screens/MapScreen';

// class MapScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1 }}>
//         <Text>Map Screen</Text>
//          <MapView
//            style = {{ flex: 1 }}
//            showsUserLocation = { true }
//            initialRegion={{
//              latitude: 42.8051621,
//              longitude: -70.868148,
//              latitudeDelta: 0.0922,
//              longitudeDelta: 0.0421,
//            }}
//          />
//       </View>
//     );
//   }
// }


const AppNavigator = createDrawerNavigator({
  Home: {
    screen: HomeScreen,
  },
  Map: {
    screen: MapScreen,
  }
});

export default createAppContainer(AppNavigator);


// export default class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <MapView
//           style = {{ flex: 1 }}
//           showsUserLocation = { true }
//           initialRegion={{
//             latitude: 42.8051621,
//             longitude: -70.868148,
//             latitudeDelta: 0.0922,
//             longitudeDelta: 0.0421,
//           }}
//         />
//         <Text style={styles.welcome}>React Native Maps Test!</Text>
//       </View>
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
