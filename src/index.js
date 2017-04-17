import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Animated
} from 'react-native';
import Ball from './Ball';

class App extends Component {
  componentWillMount() {
    this.ballPosition = new Animated.ValueXY(0, 0);
    Animated.spring(this.ballPosition, {
      toValue: { x: 200, y: 500 }
    }).start();
  }

  render() {
    return (
      <View style={styles.container}>

        <Animated.View style={this.ballPosition.getLayout()}>
          <Ball />
        </Animated.View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
