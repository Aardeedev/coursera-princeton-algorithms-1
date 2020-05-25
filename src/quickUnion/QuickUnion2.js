class QuickFindUF {
  constructor(n) {
    this.nodes = new Array(n).fill(0).map((v, i) => i);
  }

  getRootNode(x) {
    while (x !== this.nodes[x]) {
      x = this.nodes[x];
    }
    return x;
  }

  connected(p, q) {
    return this.getRootNode(p) === this.getRootNode(q);
  }

  union(p, q) {
    this.nodes[this.getRootNode(p)] = this.getRootNode(q);
  }
}

module.exports = QuickFindUF;
