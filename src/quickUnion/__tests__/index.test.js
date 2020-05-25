const QuickUnion = require("../QuickUnion2.js");

describe("quick Union tests", () => {
  it("Creates an array of nodes with x entries of nodes[index] === index", () => {
    expect(new QuickUnion(10).nodes).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(new QuickUnion(8).nodes).toEqual([0, 1, 2, 3, 4, 5, 6, 7]);
    expect(new QuickUnion(13).nodes).toEqual([
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ]);
  });

  it("gets the root node of a given node", () => {
    const qu = new QuickUnion(10);
    qu.nodes = [7, 1, 2, 3, 4, 5, 6, 9, 8, 4];
    expect(qu.getRootNode(3)).toBe(3);
    expect(qu.getRootNode(0)).toBe(4);
  });

  it("Union connects node via root nodes", () => {
    const qu = new QuickUnion(10);
    qu.nodes = [7, 1, 2, 3, 4, 5, 6, 9, 8, 4];

    qu.union(2, 3);
    expect(qu.nodes).toEqual([7, 1, 3, 3, 4, 5, 6, 9, 8, 4]);
    qu.union(0, 3);
    expect(qu.nodes).toEqual([7, 1, 3, 3, 3, 5, 6, 9, 8, 4]);
    qu.union(5, 6);
    expect(qu.nodes).toEqual([7, 1, 3, 3, 3, 6, 6, 9, 8, 4]);
    qu.union(5, 9);
    expect(qu.nodes).toEqual([7, 1, 3, 3, 3, 6, 3, 9, 8, 4]);
  });

  it("Returns true if nodes are connected and false if not", () => {
    const qu = new QuickUnion(10);
    qu.nodes = [7, 1, 2, 3, 4, 5, 6, 9, 8, 4];

    expect(qu.connected(1, 3)).toBe(false);
    expect(qu.connected(4, 0)).toBe(true);

    qu.nodes = [7, 1, 3, 3, 3, 6, 9, 9, 8, 4];
    expect(qu.connected(0, 5)).toBe(true);
  });
});
