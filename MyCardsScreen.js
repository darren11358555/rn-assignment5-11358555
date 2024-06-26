import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { View, Text, StyleSheet, Image } from 'react-native';

const MyCardsScreen = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <View style={isDarkMode ? styles.darkContainer : styles.container}>
      <Text style={isDarkMode ? styles.darkText : styles.text}>My Cards</Text>
      <View style={styles.cardContainer}>
        <Image source={require('../assets/Card.png')} style={styles.cardImage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white', padding: 20 },
  darkContainer: { flex: 1, backgroundColor: '#000', padding: 20 },
  text: { color: 'black', fontSize: 18 },
  darkText: { color: 'white', fontSize: 18 },
  cardContainer: { alignItems: 'center', marginTop: 20 },
  cardImage: { width: 300, height: 200 },
});

export default MyCardsScreen;
