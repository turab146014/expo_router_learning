import { StyleSheet, View, Text } from "react-native";
import React from  "react";
import { Link } from "expo-router";

export default function Index() {
  return  (
    <View style = {styles.container}>
      <Text>Edit app/index.tesx to edit this screen</Text>
      <Link href= "../modals"> Open modal </Link>
      <Link href= "../webmodal"> Open Web modal </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container :{
    flex : 1,
    justifyContent :"center",
    alignItems : "center"
  }
});
