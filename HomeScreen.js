import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';

const HomeScreen = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <ScrollView style={isDarkMode ? styles.darkContainer : styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image source={require('../assets/profile.png')} style={styles.profilePic} />
          <View>
            <Text style={isDarkMode ? styles.darkSubText : styles.subText}>Welcome back,</Text>
            <Text style={isDarkMode ? styles.darkText : styles.text}>Eric Atsu</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Image source={require('../assets/search.png')} style={[styles.searchIcon, isDarkMode && styles.whiteIcon]} />
        </TouchableOpacity>
      </View>
      <View style={styles.cardContainer}>
        <Image source={require('../assets/Card.png')} style={styles.cardImage} />
      </View>
      <View style={styles.actions}>
        <View style={styles.actionItem}>
          <View style={isDarkMode ? styles.darkCircle : styles.circle}>
            <Image source={require('../assets/send.png')} style={[styles.actionIcon, isDarkMode && styles.whiteIcon]} />
          </View>
          <Text style={isDarkMode ? styles.darkText : styles.text}>Sent</Text>
        </View>
        <View style={styles.actionItem}>
          <View style={isDarkMode ? styles.darkCircle : styles.circle}>
            <Image source={require('../assets/recieve.png')} style={[styles.actionIcon, isDarkMode && styles.whiteIcon]} />
          </View>
          <Text style={isDarkMode ? styles.darkText : styles.text}>Receive</Text>
        </View>
        <View style={styles.actionItem}>
          <View style={isDarkMode ? styles.darkCircle : styles.circle}>
            <Image source={require('../assets/loan.png')} style={[styles.actionIcon, isDarkMode && styles.whiteIcon]} />
          </View>
          <Text style={isDarkMode ? styles.darkText : styles.text}>Loan</Text>
        </View>
        <View style={styles.actionItem}>
          <View style={isDarkMode ? styles.darkCircle : styles.circle}>
            <Image source={require('../assets/topUp.png')} style={[styles.actionIcon, isDarkMode && styles.whiteIcon]} />
          </View>
          <Text style={isDarkMode ? styles.darkText : styles.text}>Topup</Text>
        </View>
      </View>
      <View style={styles.transactionHeader}>
        <Text style={isDarkMode ? styles.darkText : styles.text}>Transaction</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.transactionItem}>
        <View style={isDarkMode ? styles.darkTransactionCircle : styles.transactionCircle}>
          <Image source={require('../assets/apple.png')} style={[styles.transactionIcon, isDarkMode && styles.whiteIcon]} />
        </View>
        <View style={styles.transactionDetails}>
          <Text style={isDarkMode ? styles.darkText : styles.text}>Apple Store</Text>
          <Text style={styles.transactionSubText}>Entertainment</Text>
        </View>
        <Text style={isDarkMode ? styles.darkText : styles.text}>- $5.99</Text>
      </View>
      <View style={styles.transactionItem}>
        <View style={isDarkMode ? styles.darkTransactionCircle : styles.transactionCircle}>
          <Image source={require('../assets/spotify.png')} style={[styles.transactionIcon, isDarkMode && styles.whiteIcon]} />
        </View>
        <View style={styles.transactionDetails}>
          <Text style={isDarkMode ? styles.darkText : styles.text}>Spotify</Text>
          <Text style={styles.transactionSubText}>Music</Text>
        </View>
        <Text style={isDarkMode ? styles.darkText : styles.text}>- $12.99</Text>
      </View>
      <View style={styles.transactionItem}>
        <View style={isDarkMode ? styles.darkTransactionCircle : styles.transactionCircle}>
          <Image source={require('../assets/moneyTransfer.png')} style={[styles.transactionIcon, isDarkMode && styles.whiteIcon]} />
        </View>
        <View style={styles.transactionDetails}>
          <Text style={isDarkMode ? styles.darkText : styles.text}>Money Transfer</Text>
          <Text style={styles.transactionSubText}>Transaction</Text>
        </View>
        <Text style={styles.transactionHighlight}>$300</Text>
      </View>
      <View style={styles.transactionItem}>
        <View style={isDarkMode ? styles.darkTransactionCircle : styles.transactionCircle}>
          <Image source={require('../assets/grocery.png')} style={[styles.transactionIcon, isDarkMode && styles.whiteIcon]} />
        </View>
        <View style={styles.transactionDetails}>
          <Text style={isDarkMode ? styles.darkText : styles.text}>Grocery</Text>
          <Text style={styles.transactionSubText}>- $88</Text>
        </View>
        <Text style={isDarkMode ? styles.darkText : styles.text}>- $88</Text>
      </View>
    </ScrollView>
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
    backgroundColor: '#0D1B2A', 
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  searchIcon: {
    width: 30,
    height: 30,
  },
  whiteIcon: {
    tintColor: 'white', 
  },
  subText: {
    color: 'gray',
    fontSize: 14,
  },
  darkSubText: {
    color: '#ccc',
    fontSize: 14,
  },
  text: {
    color: 'black',
    fontSize: 18,
  },
  darkText: {
    color: 'white',
    fontSize: 18,
  },
  cardContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  actionItem: {
    alignItems: 'center',
  },
  actionIcon: {
    width: 30, 
    height: 30, 
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  darkCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#1E1E1E', 
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  transactionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  seeAllText: {
    color: '#1E90FF',
    fontSize: 14,
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  transactionCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  darkTransactionCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#1E1E1E', 
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  transactionIcon: {
    width: 24,
    height: 24, 
  },
  transactionDetails: {
    flex: 1,
    marginLeft: 10,
  },
  transactionSubText: {
    color: '#888',
    fontSize: 14,
  },
  transactionHighlight: {
    color: '#1E90FF', 
    fontSize: 16,
  },
});

export default HomeScreen;
