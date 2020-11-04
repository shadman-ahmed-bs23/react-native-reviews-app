import React from 'react'; 
import { View, Text, StyleSheet, Button } from 'react-native'; 

const Review = ({ route, navigation }) => {

  const { title, rating, body } = route.params;
  const backBtnHandler = () => {
    navigation.goBack();
  } 
  return (
    <View> 
      <Text>Hello from Review component</Text>
      <Text>{ title }</Text>
      <Text>{ rating }</Text> 
      <Text>{ body } </Text> 
    </View>
  ); 
}

export default Review; 