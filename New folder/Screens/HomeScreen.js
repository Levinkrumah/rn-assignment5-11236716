// src/screens/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Card from '../components/Card.png';
import TransactionItem from '../components/TransactionItem';

const HomeScreen = () => {
  const transactions = [
    { id: '1', name: 'Apple Store', category: 'Entertainment', amount: '-$5.99' },
    { id: '2', name: 'Spotify', category: 'Music', amount: '-$12.99' },
    { id: '3', name: 'Money Transfer', category: 'Transaction', amount: '$300' },
    { id: '4', name: 'Grocery', category: 'Grocery', amount: '-$88' },
  ];

  return (
    <View style={styles.container}>
      <Card />
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TransactionItem transaction={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default HomeScreen;
