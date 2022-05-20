module.exports = function (lvalue, operator, rvalue) {
  return {
    '==': lvalue == rvalue,
    '>': parseFloat(lvalue) > parseFloat(rvalue),
    '>=': parseFloat(lvalue) >= parseFloat(rvalue),
    '<': parseFloat(lvalue) < parseFloat(rvalue),
    '<=': parseFloat(lvalue) <= parseFloat(rvalue),
    '+': parseFloat(lvalue) + parseFloat(rvalue),
    '-': parseFloat(lvalue) - parseFloat(rvalue),
    '*': parseFloat(lvalue) * parseFloat(rvalue),
    '/': parseFloat(lvalue) / parseFloat(rvalue),
    '%': parseFloat(lvalue) % parseFloat(rvalue),
  }[operator];
};
