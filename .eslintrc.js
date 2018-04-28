module.exports = {
  'extends': 'airbnb-base',
  'env': {
    'browser': true,
    'node': true
  },
  'rules': {
    // Adjust the rules to your needs.
    // Complete List: https://eslint.org/docs/rules/
  },
  // Activate the resolver plugin, required to recognize the 'config' resolver
  settings: {
    'import/resolver': {
        webpack: {},
    },
  },
};
