// src/components/TransactionItem.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TransactionItem = ({ transaction }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.name}>{transaction.name}</Text>
      <Text style={styles.amount}>{transaction.amount}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  name: {
    fontSize: 16,
  },
  amount: {
    fontSize: 16,
    textAlign: 'right',
  },
});

export default TransactionItem;
