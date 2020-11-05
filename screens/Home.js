import React, { useState } from 'react'; 
import { View, Text, StyleSheet, FlatList, Modal, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native'; 
import ReviewForm from './ReviewForm';

import uuid from 'uuid-random'; 
import Ionicons from 'react-native-vector-icons/Ionicons';


const Home = ({ navigation }) => {

  const [modalOpen, setModalOpen] = useState(false); 
  const [reviews, setReviews] = useState([
    {key: uuid(), title: 'F.R.I.E.N.D.S', rating: 5, body: 'Sitcom series'}, 
    {key: uuid(), title: 'The Big Bang Theory', rating: 3, body: 'Sitcom Series'},
  ]); 

  const addReview = (review) => {
    review.key = uuid();
    setReviews((currentReviews) => {
      return [review, ...currentReviews];
    });
    setModalOpen(false);
  }


  return (
    <View style={styles.container}> 

      <Modal 
        visible={modalOpen} 
        animationType='slide'
        
      >
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.modalConent}>
            
            <Text>Hello</Text>
            <Ionicons 
              name='close-circle'
              size={65}
              style={styles.closeIcon}
              onPress={() => {setModalOpen(false)}}
            />
            <ReviewForm addReview={addReview}/>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      
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
      
      <Ionicons 
        name='add-circle'
        size={65}
        style={styles.addIcon}
        onPress={() => {setModalOpen(true)}}
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
    fontWeight: 'bold',
  },
  addIcon: {
    color: '#6d50ad', 
    left: 320,
    marginBottom: 8,
    shadowOpacity: 1,
    textShadowRadius: 15,
    textShadowOffset: {
      width: 2,
      height: 2
    }
  },
  closeIcon: {
    color: '#6d50ad', 
    left: 300,
    marginBottom: 8,
    shadowOpacity: 1,
    textShadowRadius: 15,
    textShadowOffset: {
      width: 2,
      height: 2
    },
  },
  modalConent: {
    padding: 15,
  }
}); 

export default Home; 