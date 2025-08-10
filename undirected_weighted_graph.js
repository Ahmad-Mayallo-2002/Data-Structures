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
    this.list[j].push([i, w]);
  }

  displayMatrix() {
    for (const row of this.matrix) console.log(row);
  }

  displayList() {
    for (let i = 0; i < this.list.length; i++) {
      let line = `${i}: `;
      for (const j of this.list[i]) line += `{${j}} `;
      log(line);
    }
  }
}

const graph = new Graph(4);

graph.addEdgeMatrix(0, 1, 5);
graph.addEdgeMatrix(1, 0, 5);
graph.addEdgeMatrix(1, 2, 3);
graph.addEdgeMatrix(2, 1, 3);

graph.addEdgeList(0, 1, 5);
graph.addEdgeList(1, 2, 3);

graph.displayMatrix();
graph.displayList();
