const {AuthenticationError} = require ('apollo-server');
const Pin = require ('./models/Pin');

const authenticated = next => (root, args, context, info) => {
  if (!context.currentUser) {
    throw new AuthenticationError ('You must be logged in ');
  }
  return next (root, args, context, info);
};
module.exports = {
  Query: {
    me: authenticated ((root, args, context, info) => context.currentUser),
  },
  Mutation: {
    createPin: authenticated (async (root, args, context) => {
      try {
        const newPin = await new Pin ({
          ...args.input,
          author: context.currentUser._id,
        }).save ();
        const pinAdded = await Pin.populate (newPin, 'author');
        return pinAdded;
      } catch (e) {
        console.log (e);
        throw new Error (e.message);
      }
    }),
  },
};
