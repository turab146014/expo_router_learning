import  { Slot } from "expo-router";
import {View, Text, StyleSheet} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaView style={styles.container}>
      <Slot />
      <View style={styles.footer}>
        <Text style={styles.footerText}>Dicounted Products</Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footer: {
    height: 50,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
  footerText: {
    color: "#eaff00",
    fontSize: 16,
  },
});
