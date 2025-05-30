import {StyleSheet, View} from 'react-native';
import React from 'react';

const Spacer = () => {
  return <View style={styles.space} testID="spacer" />;
};

export default Spacer;

const styles = StyleSheet.create({
  space: {
    height: 20,
  },
});
