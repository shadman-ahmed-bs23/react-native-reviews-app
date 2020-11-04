import React, { useState } from 'react'; 
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Button } from 'react-native'; 
import uuid from 'uuid-random'; 


const Home = ({ navigation }) => {

  const [reviews, setReviews] = useState([
    {key: uuid(), title: 'F.R.I.E.N.D.S', rating: 5, body: 'Sitcom series'}, 
    {key: uuid(), title: 'The Big Bang Theory', rating: 5, body: 'Sitcom Series'},
  ]); 

  const reviewDetailsHandler = () => {
    navigation.navigate('ReviewDetails'); 
  }

  return (
    <View style={styles.container}> 
      <FlatList 
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.reviewItem}
            onPress={() => {
              navigation.navigate('ReviewDetails', { 
                title: item.title,
                rating: item.rating,
                body: item.body
              });
            }}>
            <Text style={styles.titleText}>{ item.title }</Text> 
          </TouchableOpacity>
        )}
      />
    </View>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }, 
  reviewItem: {
    padding: 10,
    marginTop: 15, 
    marginBottom: 10,
    marginRight: 20, 
    marginLeft: 20,
    elevation: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#eee',
  },  
  titleText: {
    fontSize: 20,
  },
}); 

export default Home; 