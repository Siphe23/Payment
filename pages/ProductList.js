import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

export default function ProductList({ addItemToCart }) {
  
  const products = [
    {
      id: '1',
      name: 'Laptop',
      price: 999.99,
      img: 'https://example.com/laptop.jpg',
    },
    {
      id: '2',
      name: 'Smartphone',
      price: 499.99,
      img: 'https://example.com/smartphone.jpg',
    },
    {
      id: '3',
      name: 'Headphones',
      price: 199.99,
      img: 'https://example.com/headphones.jpg',
    },
  ];

  return (
    <View style={styles.container}>
      {products.map((product) => (
        <View key={product.id} style={styles.productItem}>
          <Image source={{ uri: product.img }} style={styles.productImage} />
          <Text>{product.name}</Text>
          <Text>${product.price}</Text>
          <Button title="Add to Cart" onPress={() => addItemToCart(product)} />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  productItem: {
    alignItems: 'center',
    margin: 10,
  },
  productImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
});
