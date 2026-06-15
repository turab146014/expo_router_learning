import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function ProductList() {
  return (
    <View style={styles.container}>
      <Text>Product List Details</Text>

      <Link href="../products/1">Go to Product 1</Link>
      <Link href="../products/2">Go to Product 2</Link>
      <Link href="../products/3">Go to Product 3</Link>
      <Link href= "/products/best-sellers/playstation-5">PlayStation 5 (Best Sellers)</Link>
      <Link href= "/products/deals/black-friday/playstation-5">PlayStation 5 (deals)</Link>
      <Link href= "/products/search/playstation-5">PlayStation 5 (search)</Link>
      <Link href= "../">Go to Home</Link>
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

});
