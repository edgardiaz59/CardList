import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import CardList from './components/CardList';
import { cards } from './data/cards';

export default function App() {
  return (
    <SafeAreaView>
        <Text style={styles.homeText}>
        Welcome! This application displays some my 
        favorite 50's and 60's classic cars!
        </Text>
        <CardList items={cards} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create ({
  homeText: {
    fontSize: 30,
    paddingVertical: 15,
    paddingHorizontal: 15
  }
});