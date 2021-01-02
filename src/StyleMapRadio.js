import React from "react";
import { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Modal,
  Alert,
  TouchableHighlight,
} from "react-native";
import { RadioButton } from "react-native-paper";
import Map from "./Map";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      value: {},
    };
  }
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };
  render() {
    const { modalVisible } = this.state;
    return (
      <View style={styles.container}>
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
                  onValueChange={(value) => this.setState({ value: value })}
                  value={this.state.value}
                >
                  <RadioButton.Item label="Dark Style Map" value="Dark_Map" />
                  <RadioButton.Item label="Night Style Map" value="Night_Map" />
                  <RadioButton.Item label="Retro Style Map" value="Retro_Map" />
                  <RadioButton.Item
                    label="Silver Style Map"
                    value="Silver_Map"
                  />
                  <RadioButton.Item
                    label="Standard Style Map"
                    value="Standard_Map"
                  />
                  <RadioButton.Item
                    label="Aubergine Style Map"
                    value="Aubergine_Map"
                  />
                </RadioButton.Group>
                <TouchableHighlight
                  style={{ ...styles.openButton, backgroundColor: "green" }}
                  onPress={() => {
                    this.setModalVisible(!modalVisible);
                  }}
                >
                  <Text style={styles.textStyle}>Hide Map Type </Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>
          <TouchableHighlight
            style={styles.openButton}
            onPress={() => {
              this.setModalVisible(true);
            }}
          >
            <Text style={styles.textStyle}>Chọn Map</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignSelf: "stretch",
    height: "100%",
    position: "relative",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
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
    backgroundColor: "#2ccce4",
    padding: 10,
    elevation: 2,
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
});
