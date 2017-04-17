import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

class Ball extends Component {
  render() {
    return (
      <View style={styles.ball} />
    );
  }
}

const styles = StyleSheet.create({
  ball: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'red'
  }
});

export default Ball;
