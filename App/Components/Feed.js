var React= require('react-native');
var Product = require('./Product');
var Page = require('./Page');
var api = require('./../Utils/api');

var {
  Component,
  StyleSheet,
  View,
  Text,
  ListView
} = React;

var sample = {
  "name": "Streaks",
  "tagline": "The to-do list for habits",
  "screenshot_url": {
    "850px": "https://api.url2png.com/v6/P5329C1FA0ECB6/5b750f810e43f6aa97e1e49cef4bf246/png/?thumbnail_max_width=850&url=http%3A%2F%2Fstreaksapp.com%2F"
  }
};

class Feed extends Component {
  constructor() {
    var dataSource = new ListView.DataSource(
      {rowHasChanged: (r1,r2) => r1 !== r2}
    );

    this.state = {
      dataSource: dataSource.cloneWithRows([])
    }

    api.getPosts().then((json) => {
      console.log(json);
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(json.posts)
      })

    });
  }
  goToProduct(product) {
    this.props.navigator.push({
      component: Page,
      passProps: {redirect_url: product.redirect_url},
      title: product.title
    });
  }
  renderRow(product) {
    return (
      <Product product={product} goToProduct={this.goToProduct.bind(this,product)}/>
    )
  }
  render() {
    return (
      <ListView
        pageSize={2}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)}
      />
    )
  }

}

module.exports = Feed;