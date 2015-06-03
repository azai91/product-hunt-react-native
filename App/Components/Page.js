var React = require('react-native');

var {
  WebView,
  StyleSheet,
  Component,
  View
} = React;

class Page extends Component {
  render() {
    console.log(this.props.redirect_url);
    return (
      <View style={styles.container}>
        <WebView
          url={this.props.redirect_url}
        ></WebView>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

module.exports = Page;