import React, { Component } from "react";
import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  Image,
  Alert,
} from "react-native";
const DangNhap = ({ navigation }) => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const handlePress = async () => {
    /* if (user == "Admin" && pass == "Admin") {
      navigation.navigate("Details");
    } else {
      Alert.alert("Đăng Nhập Không Thành Công");
    } */
    fetch(`http://192.168.43.133:45455/api/User?taikhoan=${user}&matkhau=${pass}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.TaiKhoan == user && data.MatKhau == pass) {
          navigation.navigate("Details");
        } else {
          alert("Đăng Nhập Không Thành Công");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <View style={styles.inner}>
      <Image
        style={styles.image}
        source={{
          uri:
            "https://computercoach.co.nz/tu/wp-content/uploads/2020/09/Google-Maps-Javascript-API-Nasil-Kullanilir.jpg",
        }}
      />
      <Text style={styles.content}>GPS Theo Dõi Lộ Trình </Text>

      <TextInput
        keyboardType="default"
        onChangeText={(username) => setUser(username)}
        placeholder="User"
        style={styles.textinput}
        value={user}
      />
      <TextInput
        keyboardType="default"
        onChangeText={(password) => setPass(password)}
        placeholder="Password"
        secureTextEntry={true}
        style={styles.textinput}
        value={pass}
      />

      <View style={styles.btnContainer}>
        <Button color="green" title="Đăng Nhập" onPress={handlePress} />
      </View>
    </View>
  );
};
export default DangNhap;

const styles = StyleSheet.create({
  inner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  image: {
    height: 150,
    width: 150,
  },
  content: {
    fontSize: 30,
    color: "black",
    marginTop: 10,
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
  btnContainer: {
    backgroundColor: "white",
    marginTop: 12,
  },
});
