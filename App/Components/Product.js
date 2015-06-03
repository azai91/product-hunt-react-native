var React = require('react-native');

var {
  Component,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight
} = React;

var sample = {
  "name": "Streaks",
  "tagline": "The to-do list for habits",
  "screenshot_url": {
    "850px": "https://api.url2png.com/v6/P5329C1FA0ECB6/5b750f810e43f6aa97e1e49cef4bf246/png/?thumbnail_max_width=850&url=http%3A%2F%2Fstreaksapp.com%2F"
  }
};

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