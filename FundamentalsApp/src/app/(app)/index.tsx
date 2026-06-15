import { Text, View, StyleSheet, Pressable} from "react-native";
import {Link} from "expo-router";
import { Button } from "expo-router/build/react-navigation";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Home Page</Text>

      <Link href= "../profile/turab">Profile Page</Link>

      <Link href= "/about">About page</Link>

      <Link href= "../products">Product Page</Link>

      <Link href = "../Missing-route">Missing Route</Link>

      <Link href= "/products/best-sellers/playstation" asChild></Link>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Playstation</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    alignItems : "center",
    justifyContent : "center"
  },
  button : {
    backgroundColor : "#00e1ff",
    padding : 16,
    borderRadius : 6
  },

  buttonText :{
    color :"white",
    fontSize :10
  }
});
