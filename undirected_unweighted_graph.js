class Graph {
  constructor(V) {
    this.V = V;
    this.matrix = Array.from({ length: V }, () => Array(V).fill(0));
  }

  addEdge(i, j) {
    this.matrix[i][j] = 1;
    this.matrix[j][i] = 1;
  }

  display() {
    for (const row of this.matrix) console.log(row);
  }
}

const graph = new Graph(4);

graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 2);
graph.addEdge(2, 3);

graph.display();
