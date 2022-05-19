module.exports = function (value, currency) {
  return Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    useGrouping: false,
  }).format(value);
};
