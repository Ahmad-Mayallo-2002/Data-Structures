import { log } from "console";

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
    for (const row of this.matrix) log(row);
  }
}

const graph = new Graph(4);

graph.addEdge(0, 1, 5);
graph.addEdge(1, 2, 3);
graph.addEdge(2, 3, 4);
graph.addEdge(3, 0, 10);

graph.display();
