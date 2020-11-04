import React from 'react';
import {View, Text, Button} from 'react-native'; 

const Settings = ({ navigation }) => {
  return (
    <View>
      <Text>
        Hello from settings component
      </Text> 
      <Button title="Go to About" onPress={() => navigation.navigate('About')} />
    </View> 
  ); 
}

export default Settings; 