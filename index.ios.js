/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Feed = require('./App/Components/Feed');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Component,
  Image,
  NavigatorIOS
} = React;

class ProductHunt extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: "Product Hunt React Native",
          component: Feed
        }}/>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

AppRegistry.registerComponent('ProductHunt', () => ProductHunt);
