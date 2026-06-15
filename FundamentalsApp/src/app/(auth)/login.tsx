import {View, Text, StyleSheet} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import React from "react";

export default function login () {
  return(
    <SafeAreaView>
      <View>
        <Text>Login Screen</Text>
      </View>
    </SafeAreaView>
  );

}

const styles = StyleSheet.create ({
  container : {
    flex : 1,
    alignItems : "center",
    justifyContent : "center"
  },
});
