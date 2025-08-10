import { log } from "console";

class Graph {
  constructor(V) {
    this.V = V;
    this.matrix = Array.from({ length: V }, () => Array(V).fill(0));
    this.list = Array.from({ length: V }, () => []);
  }

  addEdgeMatrix(i, j) {
    this.matrix[i][j] = 1;
    this.matrix[j][i] = 1;
  }

  addEdgeList(i, j) {
    this.list[i].push(j);
    this.list[j].push(i);
  }

  displayMatrix() {
    for (const row of this.matrix) console.log(row);
  }

  displayList() {
    for (let i = 0; i < this.list.length; i++) {
      let line = `${i}: `;
      for (const j of this.list[i]) line += `${j} `;
      log(line);
    }
  }
}

const graph = new Graph(4);

graph.addEdgeMatrix(0, 1);
graph.addEdgeMatrix(0, 2);
graph.addEdgeMatrix(1, 2);
graph.addEdgeMatrix(2, 3);

graph.addEdgeList(0, 1);
graph.addEdgeList(0, 2);
graph.addEdgeList(1, 2);
graph.addEdgeList(2, 3);

// graph.displayMatrix();

graph.displayList();
