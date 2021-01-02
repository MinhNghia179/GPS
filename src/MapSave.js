import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import MapView, { Marker, AnimatedRegion, Polyline } from "react-native-maps";

const points = [
  { latitude: 11.56813, longitude: 104.91037 },
  { latitude: 11.56779, longitude: 104.90666 },
  { latitude: 11.56711, longitude: 104.90673 },
  { latitude: 11.56582, longitude: 104.90688 },
  { latitude: 11.5644, longitude: 104.90704 },
  { latitude: 11.56354, longitude: 104.90715 },
  { latitude: 11.56321, longitude: 104.90716 },
  { latitude: 11.56318, longitude: 104.90743 },
  { latitude: 11.56289, longitude: 104.90892 },
  { latitude: 11.56254, longitude: 104.91068 },
  { latitude: 11.56234, longitude: 104.91186 },
];

export default function App({ navigation }) {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 11.56455,
          longitude: 104.911944,
          latitudeDelta: 0.0,
          longitudeDelta: 0.012,
        }}
      >
        <Polyline
          coordinates={points}
          strokeWidth={10}
          strokeColor="#00a8ff"
          lineCap="around"
        />
      </MapView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
  map: {
    flex: 1,
    alignSelf: "stretch",
  },
});
