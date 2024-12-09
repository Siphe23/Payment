import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Cart({ navigation }) {
  const [cartItems, setCartItems] = useState([]);

  // Load cart items from AsyncStorage when the component mounts
  useEffect(() => {
    const loadCartItems = async () => {
      try {
        const storedCartItems = await AsyncStorage.getItem('cartItems');
        if (storedCartItems) {
          setCartItems(JSON.parse(storedCartItems));
        }
      } catch (error) {
        console.error('Failed to load cart items', error);
      }
    };
    loadCartItems();
  }, []);

  // Save cart items to AsyncStorage whenever the cart changes
  useEffect(() => {
    const saveCartItems = async () => {
      try {
        await AsyncStorage.setItem('cartItems', JSON.stringify(cartItems));
      } catch (error) {
        console.error('Failed to save cart items', error);
      }
    };
    saveCartItems();
  }, [cartItems]);

  // Remove an item from the cart
  const removeItemFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Calculate the total price of items in the cart
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  // Handle proceeding to payment
  const handleProceedToPayment = () => {
    navigation.navigate('Payment');  // Navigate to the Payment page
  };

  return (
    <View style={styles.container}>
      {cartItems.length === 0 ? (
        <Text>Cart is empty</Text>
      ) : (
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.cartItem}>
              <Image source={{ uri: item.img }} style={styles.cartItemImage} />
              <Text>Name: {item.name}</Text>
              <Text>Price: ${item.price}</Text>
              <TouchableOpacity onPress={() => removeItemFromCart(item.id)}>
                <Text style={styles.removeButton}>Remove</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}

      <Text>Total: ${calculateTotal()}</Text>

      <Button title="Proceed to Payment" onPress={handleProceedToPayment} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3e5ab',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  cartItem: {
    marginBottom: 20,
    borderBottomWidth: 1,
    paddingBottom: 10,
    alignItems: 'center',
  },
  cartItemImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  removeButton: {
    color: 'red',
    marginTop: 10,
  },
});
