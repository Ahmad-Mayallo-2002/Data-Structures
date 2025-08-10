import { log } from "console";

class Graph {
  constructor(V) {
    this.V = V;
    this.matrix = Array.from({ length: V }, () => Array(V).fill(Infinity));
    this.list = Array.from({ length: V }, () => []);
  }

  addEdgeMatrix(i, j, w) {
    this.matrix[i][j] = w;
    this.matrix[j][i] = w;
  }

  addEdgeList(i, j, w) {
    this.list[i].push([j, w]);
  }

  displayMatrix() {
    for (const row of this.matrix) log(row);
  }

  displayList() {
    for (let i = 0; i < this.list.length; i++) {
      let line = i + ": ";
      for (const j of this.list[i]) line += `{${j[0]}, ${j[1]}}`;
      log(line);
    }
  }
}

const graph = new Graph(4);

graph.addEdgeMatrix(0, 1, 5);
graph.addEdgeMatrix(1, 2, 3);
graph.addEdgeMatrix(2, 3, 4);
graph.addEdgeMatrix(3, 0, 10);

graph.addEdgeList(0, 1, 5);
graph.addEdgeList(1, 2, 3);
graph.addEdgeList(2, 3, 4);
graph.addEdgeList(3, 0, 10);

graph.displayList();

// graph.displayMatrix();
