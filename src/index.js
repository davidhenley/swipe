import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import {
  Card,
  Button,
  Icon
} from 'react-native-elements';

import Deck from './Deck';
import DATA from './data';

class App extends Component {
  renderCard(item) {
    return (
      <Card
        image={{ uri: item.uri }}
        key={item.id}
      >
        <Text style={styles.cardHeader}>{item.text}</Text>
        <Text style={styles.cardText}>
          I can customize this Card further
        </Text>
      <Button
        icon={{ name: 'code' }}
        backgroundColor='#03A9F4'
        buttonStyle={{ marginLeft: 0, marginRight: 0 }}
        title='View Now' />
      </Card>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Deck
          data={DATA}
          renderCard={this.renderCard}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cardText: {
    marginBottom: 10
  },
  cardHeader: {
    fontWeight: 'bold',
    fontSize: 17,
    color: '#666',
    marginBottom: 10
  }
});

export default App;
