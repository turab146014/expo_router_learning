import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {useLocalSearchParams} from "expo-router";

export default function CatchAllProductDetail() {
  const {rest} = useLocalSearchParams<{rest: string []}>();
  return (
    <View style={styles.container}>
      <Text>Catch all product details</Text>
      <Text>Details of Product with Id {rest}</Text>
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
