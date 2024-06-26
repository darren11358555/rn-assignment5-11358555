import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { View, Text, StyleSheet } from 'react-native';

const StatisticsScreen = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <View style={isDarkMode ? styles.darkContainer : styles.container}>
      <Text style={isDarkMode ? styles.darkText : styles.text}>Statistics</Text>
      {/* Add statistics components here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white', padding: 20 },
  darkContainer: { flex: 1, backgroundColor: '#000', padding: 20 },
  text: { color: 'black', fontSize: 18 },
  darkText: { color: 'white', fontSize: 18 },
});

export default StatisticsScreen;
