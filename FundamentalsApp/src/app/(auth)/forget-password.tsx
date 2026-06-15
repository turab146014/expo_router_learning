import {View, Text, StyleSheet} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import React from "react";

export default function ForgotPassword () {
  return(
    <SafeAreaView>
      <View>
        <Text>Forgot-Password Screen</Text>
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
