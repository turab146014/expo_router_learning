import {StyleSheet, Text, View} from "react-native";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text>Profile Page Details</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
