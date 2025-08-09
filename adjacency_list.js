class Graph {
  constructor(V) {
    this.V = V;
    this.list = Array.from({ length: V }, () => []);
  }

  addEdge(u, v) {
    this.list[u].push(v);
  }

  display() {
    for (let i = 0; i < this.list.length; i++) {
      let line = i + ": ";
      for (let j of this.list[i]) line += j + " ";
      console.log(line);
    }
  }
}

const graph = new Graph(4);

graph.addEdge(0, 1);
graph.addEdge(1, 2);
graph.addEdge(2, 3);
graph.addEdge(3, 0);

graph.display();
