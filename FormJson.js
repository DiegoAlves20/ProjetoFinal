import React, {useCallback, useState} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import ExampleForm from './src/Frames/ExampleForm/ExemploForm';

const Forms = () => {
  
  
  const [formData, setFormData] = useState(JSON.stringify('{}'));

  const onSubmit = useCallback(async (values, bag) => {
    try {
      setFormData(JSON.stringify(values, null, 4));
    } catch (e) {
      bag.setErrors(e);
    } finally {
      bag.setSubmitting(false);
    }
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ExampleForm onSubmit={onSubmit} />
      <Text style={styles.values}>{formData}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
   backgroundColor:'black'
  },
  values: {
    fontSize: 16,
    marginHorizontal: 6,
    marginTop: 15,
    marginBottom: 40,
  },
});

export default Forms;