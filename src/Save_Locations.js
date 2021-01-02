import * as React from "react";
import { Text, View, StyleSheet, TouchableHighlight } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
export default function App({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View style={styles.container}>
        <View style={styles.item}>
          <Text>STT</Text>
          <Text>Tên Save Location</Text>
          <TouchableHighlight
            style={styles.itemView}
            onPress={navigation.navigate("MapSave")}
          >
            <View>
              <MaterialCommunityIcons
                name="earth-arrow-right"
                size={28}
                color="#00d084"
              />
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={styles.itemView} onPress={{}}>
            <MaterialIcons name="delete-forever" size={28} color="#d33115" />
          </TouchableHighlight>
        </View>
        <View style={styles.item}>
          <Text>STT</Text>
          <Text>Tên Save Location</Text>
          <TouchableHighlight
            style={styles.itemView}
            onPress={navigation.navigate("MapSave")}
          >
            <View>
              <MaterialCommunityIcons
                name="earth-arrow-right"
                size={28}
                color="#00d084"
              />
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={styles.itemView} onPress={{}}>
            <MaterialIcons name="delete-forever" size={28} color="#d33115" />
          </TouchableHighlight>
        </View>
        <View style={styles.item}>
          <Text>STT</Text>
          <Text>Tên Save Location</Text>
          <TouchableHighlight
            style={styles.itemView}
            onPress={navigation.navigate("MapSave")}
          >
            <View>
              <MaterialCommunityIcons
                name="earth-arrow-right"
                size={28}
                color="#00d084"
              />
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={styles.itemView} onPress={{}}>
            <MaterialIcons name="delete-forever" size={28} color="#d33115" />
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    height: "100%",
    alignSelf: "stretch",
    flexDirection: "column",
  },
  item: {
    padding: 5,
    flexDirection: "row",
    backgroundColor: "#d5dbe0",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 5,
    borderLeftWidth: 8,
    borderLeftColor: "#33691e",
  },
  itemView: {
    padding: 12,
  },
});
