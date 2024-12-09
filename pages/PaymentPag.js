import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function PaymentPage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Proceeding to Payment</Text>
      {/* You can add more payment-related functionality here */}
      <Button title="Go back to Cart" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3e5ab',
  },
});
