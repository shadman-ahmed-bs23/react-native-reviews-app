import React from 'react'; 
import { View, Text, StyleSheet } from 'react-native'; 
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Header ({ navigation, title }) {

  const openMenu = () => {
    navigation.openDrawer(); 
  }

  return (
    <View style={styles.header}>
      <Ionicons 
        name="menu" 
        size={30} 
        onPress={openMenu}
        style={styles.icon}
      />
      <View>
        <Text style={styles.headerText}>{ title }</Text> 
      </View>
    </View>
  ); 
}

const styles = StyleSheet.create({
  header: {
    width: '100%', 
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff', 
    letterSpacing: 1,
  },
  icon: {
    color: '#fff',
    position: 'absolute',
    left: 0,
  }
}); 