import { Text, View, StyleSheet } from "react-native";
import {Link} from "expo-router";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Home Page</Text>

      <Link href= "../profile">go to profile</Link>

      <Link href= "/about">go to about</Link>

      <Link href= "../products">go to products List</Link>

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
