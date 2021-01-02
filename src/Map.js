import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Modal,
  Image,
  TouchableHighlight,
  Alert,
  TextInput,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Dark from "./MapType/StyleMap_Dark";
import Night from "./MapType/StyleMap_Night";
import Retro from "./MapType/StyleMap_Retro";
import Standard from "./MapType/StyleMap_Standard";
import Silver from "./MapType/StyleMap_Silver";
import { RadioButton } from "react-native-paper";
import Aubergine from "./MapType/StyleMap_Aubergine";
import MapView, { Marker, AnimatedRegion, Polyline } from "react-native-maps";
import { PROVIDER_GOOGLE } from "react-native-maps";
const LATITUDE = 21.02593;
const LONGITUDE = 105.81327;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      modalVisibleSave: false,
      savedLocation: [],
      isTracking: false,
      currentLongitude: LATITUDE,
      currentLatitude: LONGITUDE,
    };
  }
  componentDidMount = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const currentLatitude = JSON.stringify(position.coords.latitude);
        const currentLongitude = JSON.stringify(position.coords.longitude);
        this.setState({ currentLongitude: currentLongitude });
        this.setState({ currentLatitude: currentLatitude });
      },
      (error) => alert(error.message),
      {
        enableHighAccuracy: true,
        timeout: 1000,
        maximumAge: 2000,
        distanceFilter: 0,
      }
    );
    this.watchID = navigator.geolocation.watchPosition((position) => {
      const currentLatitude = JSON.stringify(position.coords.latitude);
      const currentLongitude = JSON.stringify(position.coords.longitude);
      this.setState({ currentLatitude: currentLatitude });
      this.setState({ currentLongitude: currentLongitude });
      let arr = this.state.savedLocation;
      let newCoords = {
        latitude: parseFloat(currentLatitude),
        longitude: parseFloat(currentLongitude),
      };
      console.log(newCoords);
      arr.push(newCoords);
      this.setState({ savedLocation: arr });
    });
  };
  componentWillUnmount = () => {
    navigator.geolocation.clearWatch(this.watchID);
  };
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };
  setModalVisibleSave = (visible) => {
    this.setState({ modalVisibleSave: visible });
  };
  render() {
    const { modalVisible, modalVisibleSave } = this.state;
    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            backgroundColor: "#759e8a",
          }}
        >
          <View style={styles.centeredView}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Chọn Map Chưa Được Đóng");
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <RadioButton.Group
                    onValueChange={(text) => this.setState({ value: text })}
                    value={this.state.value}
                  >
                    <RadioButton.Item label="Dark Style Map" value={Dark} />
                    <RadioButton.Item label="Night Style Map" value={Night} />
                    <RadioButton.Item label="Retro Style Map" value={Retro} />
                    <RadioButton.Item label="Silver Style Map" value={Silver} />
                    <RadioButton.Item
                      label="Standard Style Map"
                      value={Standard}
                    />
                    <RadioButton.Item
                      label="Aubergine Style Map"
                      value={Aubergine}
                    />
                    <TouchableHighlight
                      style={{
                        ...styles.openButton,
                        backgroundColor: "green",
                      }}
                      onPress={() => {
                        this.setModalVisible(!modalVisible);
                      }}
                    >
                      <Text style={styles.textStyle}>Hide Map Type </Text>
                    </TouchableHighlight>
                  </RadioButton.Group>
                </View>
              </View>
            </Modal>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisibleSave}
              onRequestClose={() => {
                Alert.alert("Chọn Map Chưa Được Đóng");
              }}
            >
              <View style={styles.centeredViewButtons}>
                <Text>Lưu Lại Đoạn Đường Đã Đi Qua</Text>
                <TextInput
                  keyboardType="default"
                  placeholder="....."
                  style={styles.textinput}
                />
                <View style={styles.buttons}>
                  <TouchableHighlight
                    style={{
                      ...styles.openButton,
                      backgroundColor: "green",
                    }}
                    onPress={() => {
                      this.setModalVisibleSave(!modalVisibleSave);
                    }}
                  >
                    <Text style={styles.textStyle}>Save</Text>
                  </TouchableHighlight>
                  <TouchableHighlight
                    style={{
                      ...styles.openButton,
                      backgroundColor: "green",
                    }}
                    onPress={() => {
                      this.setModalVisibleSave(!modalVisibleSave);
                    }}
                  >
                    <Text style={styles.textStyle}>Đóng</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </Modal>
            <View style={styles.buttons}>
              <TouchableHighlight
                style={styles.openButton}
                onPress={() => {
                  this.setModalVisible(true);
                }}
              >
                <Text style={styles.textStyle}>
                  <Image
                    style={styles.imageLocation}
                    resizeMode="cover"
                    source={{
                      uri:
                        "https://image.flaticon.com/icons/png/128/854/854878.png",
                    }}
                  />
                </Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.openButton}
                onPress={() => {
                  this.setModalVisibleSave(true);
                }}
              >
                <MaterialIcons name="save-alt" size={24} color="black" />
              </TouchableHighlight>
            </View>
          </View>
        </View>
        <MapView
          provider={PROVIDER_GOOGLE}
          showsUserLocation
          loadingEnabled
          followsUserLocation
          style={styles.mapStyle}
          initialRegion={{
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}
          customMapStyle={this.state.value}
        >
          <Marker.Animated
            coordinate={{
              latitude: this.state.currentLatitude,
              longitude: this.state.currentLongitude,
            }}
            title={"This is Location of Me "}
            description={"description"}
          />
          <Polyline
            coordinates={this.state.savedLocation}
            strokeWidth={10}
            strokeColor="#00a8ff"
            lineCap="around"
          />
        </MapView>
      </View>
    );
  }
}
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    height: "100%",
    alignSelf: "stretch",
  },
  centeredView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  centeredViewButtons: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gray",
    marginTop: 40,
  },
  textmenu: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    padding: 5,
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 5,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    padding: 15,
    elevation: 1,
    justifyContent: "center",
    backgroundColor: "#DDDDDD",
    alignItems: "center",
    borderRadius: 10,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  imageLocation: {
    height: 30,
    width: 30,
  },
  textbutton: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textinput: {
    padding: 10,
    backgroundColor: "white",
    marginTop: 5,
    height: 45,
    borderBottomWidth: 2,
    borderBottomColor: "green",
    width: "90%",
  },
});
