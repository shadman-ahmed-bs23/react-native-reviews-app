import React from 'react'; 
import { View, Text, StyleSheet, Button, Image } from 'react-native'; 

const Review = ({ route, navigation }) => {

  const { title, rating, body } = route.params;
  const backBtnHandler = () => {
    navigation.goBack();
  }
  const images = {
    ratings: {
      '1': require('../assets/rating-1.png'),
      '2': require('../assets/rating-2.jpg'),
      '3': require('../assets/rating-3.png'),
      '4': require('../assets/rating-4.png'),
      '5': require('../assets/rating-5.png'),
    }
  } 
  return (
    <View style={styles.detailsView}> 
      <Text style={styles.titleText}>{ title }</Text>
      <Text>Category: { body } </Text> 
      <View style={styles.rating}>
        <Text style={styles.reviewText}>Review: </Text>
        <Image source={images.ratings[rating]}/>
      </View>
    </View>
  ); 
}

const styles = StyleSheet.create({
  detailsView: {
    padding: 10,
    marginTop: 15, 
    marginBottom: 10,
    marginRight: 20, 
    marginLeft: 20,
    elevation: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold', 
    textAlign: 'center',
    margin: 15,
  },
  rating: {
    flexDirection: 'row'
  },
  reviewText: {
    marginTop: 10,
  }
})

export default Review; 