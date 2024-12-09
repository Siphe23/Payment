import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductList from './pages/ProductList';  // Import ProductList component
import Cart from './pages/Cart';  // Import Cart component
import PaymentPage from './pages/PaymentPag';  // Import PaymentPage component

const Stack = createStackNavigator();

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  // Add item to the cart
  const addItemToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProductList">
        <Stack.Screen name="ProductList">
          {(props) => <ProductList {...props} addItemToCart={addItemToCart} />}
        </Stack.Screen>
        <Stack.Screen name="Cart">
          {(props) => <Cart {...props} cartItems={cartItems} />}
        </Stack.Screen>
        <Stack.Screen name="Payment" component={PaymentPage} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3e5ab',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
