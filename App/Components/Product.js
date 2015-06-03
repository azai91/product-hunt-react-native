var React = require('react-native');

var {
  Component,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight
} = React;

class Product extends Component {
  render() {
    var product = this.props.product;
    return (
      <TouchableHighlight
        onPress={this.props.goToProduct}>
        <View style={styles.container}>
          <Image style={styles.image} source={{uri: product.screenshot_url['850px']}}></Image>
          <Text>{product.name}</Text>
          <Text>{product.tagline}</Text>
        </View>
      </TouchableHighlight>

    );
  }
}

var styles = StyleSheet.create({
  image: {
    height: 300,
    marginTop: 50
  }

});

module.exports = Product;