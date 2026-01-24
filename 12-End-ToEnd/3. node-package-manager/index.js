const _ = require('lodash');

const names = ['pratap', 'prateek', 'Pratishtha'];

const capitalizeNames = _.map(names, _.upperFirst);

console.log(capitalizeNames);