class Graph {
  constructor(V) {
    this.V = V;
    this.matrix = Array.from({ length: V }, () => Array(V).fill(Infinity));
  }

  addEdge(i, j, w) {
    this.matrix[i][j] = w;
    this.matrix[j][i] = w;
  }

  display() {
    for (const row of this.matrix) console.log(row);
  }
}

const graph = new Graph(4);

graph.addEdge(0, 1, 5);
graph.addEdge(1, 0, 5);
graph.addEdge(1, 2, 3);
graph.addEdge(2, 1, 3);

graph.display();
