import  { Slot } from "expo-router";
import {View, Text, StyleSheet} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My Expo App</Text>
      </View>
      <Slot />
      <View style={styles.footer}>
        <Text style={styles.footerText}>Copyright © 2023 My Expo App. All rights reserved.</Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 50,
    backgroundColor: "#ff0000",
    alignItems: "center",
    justifyContent: "center",

  },
  headerText: {
    color: "#fff",
    fontSize: 16,

  },
  footer: {
    height: 50,
    backgroundColor: "#f4511e",
    alignItems: "center",
    justifyContent: "center",
  },
  footerText: {
    color: "#fff",
    fontSize: 16,
  },
});
