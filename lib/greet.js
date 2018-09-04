module.exports = exports = {};

exports.sayHello = (name) => {
  if(typeof name !== 'string') return null;
  return `Hello ${name}`;
};