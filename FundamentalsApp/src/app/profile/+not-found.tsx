import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import {Link} from "expo-router";

export default function NotFound() {
  return (
    <View style={styles.container}>
      <Text>Profile Page Not Found</Text>
      <Link href="../">Go Home</Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
     flex: 1,
     alignItems: "center",
     justifyContent: "center",
  }
});
