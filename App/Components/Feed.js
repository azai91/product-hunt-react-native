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