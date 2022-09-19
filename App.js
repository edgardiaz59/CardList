import React from 'react';
import { SafeAreaView } from 'react-native';
import CardList from './components/CardList';
import { cards } from './data/cards';

export default function App() {
  return (
    <SafeAreaView>
        <CardList items={cards} />
    </SafeAreaView>
  );
}
