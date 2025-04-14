Plugboard = function (wires = "") {
  var len = wires.length;

  if (len % 2 !== 0 || len > 20) throw new Error();

  this.map = {};

  for (let i = 0; i < len; i += 2) {
    if (this.map[wires[i]] || this.map[wires[i + 1]]) throw Error();

    this.map[wires[i]] = wires[i + 1];
    this.map[wires[i + 1]] = wires[i];
  }
};

Plugboard.prototype.process = function (wire) {
  return this.map[wire] || wire;
};
