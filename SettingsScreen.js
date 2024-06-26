import React, { useContext } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';

const SettingsScreen = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <View style={isDarkMode ? styles.darkContainer : styles.container}>
      <Text style={isDarkMode ? styles.darkText : styles.text}>Settings</Text>
      <TouchableOpacity style={styles.option}>
        <Text style={isDarkMode ? styles.darkText : styles.text}>Language</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Text style={isDarkMode ? styles.darkText : styles.text}>My Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Text style={isDarkMode ? styles.darkText : styles.text}>Contact Us</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Text style={isDarkMode ? styles.darkText : styles.text}>Change Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Text style={isDarkMode ? styles.darkText : styles.text}>Privacy Policy</Text>
      </TouchableOpacity>
      <View style={styles.option}>
        <Text style={isDarkMode ? styles.darkText : styles.text}>Theme</Text>
        <Switch value={isDarkMode} onValueChange={toggleTheme} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  darkContainer: {
    flex: 1,
    backgroundColor: '#0D1B2A', // Navy blue background color for dark mode
    padding: 20,
  },
  text: {
    color: 'black',
    fontSize: 18,
    marginBottom: 20,
  },
  darkText: {
    color: 'white',
    fontSize: 18,
    marginBottom: 20,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default SettingsScreen;
