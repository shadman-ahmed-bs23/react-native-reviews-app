import React from 'react';
import { Button, Text, View, StyleSheet, TextInput } from 'react-native'; 
import { Formik } from 'formik';
import * as yup from 'yup';

const reviewSchema = yup.object({
  title: yup.string().required().min(4),
  body: yup.string().required().min(4),
  rating: yup.string()
    .required()
    .test('is-num-1-5', 'Rating must be a number from 1-5', (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    }),
})

export default function ReviewForm({ addReview }) {


  return (
    <View> 
      <Formik
        initialValues={{title: '', body: '', rating: ''}}
        validationSchema={reviewSchema}
        onSubmit={(values) =>{
          addReview(values);
          //actions.resetForm();
        }}
      >
        {(props) => (
          <View style={styles.formContainer}> 
            <TextInput 
              style={styles.input}
              placeholder="Title"
              onChangeText={props.handleChange('title')}
              value={props.values.title}
              onBlur={props.handleBlur('title')}
            />
            <Text style={styles.errorText}>{ props.touched.title && props.errors.title }</Text>
            <TextInput
              multiline 
              style={styles.input}
              placeholder="Body"
              onChangeText={props.handleChange('body')}
              value={props.values.body}
              onBlur={props.handleBlur('body')}
            />
            <Text style={styles.errorText}>{ props.touched.body && props.errors.body }</Text>
            <TextInput 
              style={styles.input}
              placeholder="Rating (1-5)"
              onChangeText={props.handleChange('rating')}
              value={props.values.rating}
              keyboardType="numeric"
              onBlur={props.handleBlur('rating')}
            />
            <Text style={styles.errorText}>{ props.touched.rating && props.errors.rating }</Text>
            <View style={styles.btnContainer}>
              <Button title='submit' color='#6d50ad' onPress={props.handleSubmit} />
            </View>
          </View>
        )}
      </Formik>
    </View>
  ); 
}

const styles = StyleSheet.create({
  formContainer: {
    justifyContent: 'center',
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#ddd', 
    padding: 10,
    borderRadius: 6,
    margin: 10,
  }, 
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    marginTop: 10,
    marginHorizontal: 135,
  }, 
  errorText: {
    color: 'crimson', 
    fontWeight: 'bold',
    paddingLeft: 10,
  }
});