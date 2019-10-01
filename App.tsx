import React from 'react';
import { StyleSheet, View } from 'react-native';
import Comp from './src/Comp'

export default function App() {
  return (
    <View style={styles.container}>
      <Comp />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
