module.exports = {
  getPosts() {
    return fetch('https://api.producthunt.com/v1/posts',{
      method: 'get',
      headers: {
        'Authorization' : 'Bearer ef4bdf8f7be7aa0bf52e1c7b225e62017cb36c996973bcfc5692fadd53fc41f3'
      }
    }).then((res) => {
      return res.json();
    });
  }

};