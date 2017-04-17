import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Animated
} from 'react-native';

class Ball extends Component {
  componentWillMount() {
    this.ballPosition = new Animated.ValueXY(0, 0);
    Animated.sequence([
      Animated.spring(this.ballPosition, {
        toValue: { x: 200, y: 500 }
      })
    ]).start();
  }

  render() {
    return (
      <Animated.View style={this.ballPosition.getLayout()}>
        <View style={styles.ball} />
      </Animated.View>
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
