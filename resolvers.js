const { AuthenticationError } = require('apollo-server');
const user = {
  _id: '1',
  name: 'sarmad',
  email: 'aza@gmaill.com',
  picture: 'sdaf'
};

const authenticated = next => (root, args, context, info) => {
  if (!context.currentUser) {
    throw new AuthenticationError('You must be logged in ');
  }
  return next(root, args, context, info);
};
module.exports = {
  Query: {
    me: authenticated((root, args, context, info) => context.currentUser)
  }
};
