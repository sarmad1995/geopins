const user = {
  _id: '1',
  name: 'sarmad',
  email: 'aza@gmaill.com',
  picture: 'sdaf'
};

module.exports = {
  Query: {
    me: () => user
  }
};
