// GRAPHS

// A collection of nodes as known as vertices
// Nodes may point to another nodes, known as edges

const { createQueue } = require("./queues.js");

function createNode(key) {
  const neighbors = [];

  return {
    key,
    neighbors,
    addNeighbors(node) {
      neighbors.push(node);
    }
  };
}

function createGraph(directed = false) {
  const nodes = [];
  const edges = [];

  return {
    directed,
    nodes,
    edges,
    addNode(key) {
      nodes.push(createNode(key));
    },
    getNode(key) {
      return nodes.find(node => node.key === key);
    },
    addEdge(node1Key, node2Key) {
      const node1 = this.getNode(node1Key);
      const node2 = this.getNode(node2Key);

      node1.addNeighbors(node2);
      edges.push(`${node1Key}-${node2Key}`);

      if (!directed) {
        node2.addNeighbors(node1);
      }
    },
    print() {
      return nodes
        .map(({ key, neighbors }) => {
          let result = key;

          if (neighbors.length) {
            result += ` => ${neighbors
              .map(neighbor => neighbor.key)
              .join(" ")}`;
          }
          return result;
        })
        .join("\n");
    },

    // Breath first search
    breadthFirstSearch(startingNodeKey, visitFn) {
      const startingNode = this.getNode(startingNodeKey);

      const visited = nodes.reduce((acc, node) => {
        acc[node.key] = false;
        return acc;
      }, {});
      const queue = createQueue();
      queue.enqueue(startingNode);

      while (!queue.isEmpty()) {
        const currentNode = queue.dequeue();

        if (!visited[currentNode.key]) {
          visitFn(currentNode);
          visited[currentNode.key] = true;
        }

        currentNode.neighbors.forEach(node => {
          if (!visited[node.key]) {
            queue.enqueue(node);
          }
        });
      }
    },
    depthFirstSearch(startingNodeKey, visitFn) {
      const startingNode = this.getNode(startingNodeKey);

      const visited = nodes.reduce((acc, node) => {
        acc[node.key] = false;
        return acc;
      }, {});

      function explore(node) {
        if (visited[node.key]) {
          return;
        }
        visitFn(node);
        visited[node.key] = true;

        node.neighbors.forEach(node => {
          explore(ndoe);
        });

        explore(startingNode);
      }
    }
  };
}

// THIS IS WITHOUT FIRST BREADTH

// const graph = createGraph(true);

// graph.addNode("Kyle");
// graph.addNode("Anna");
// graph.addNode("Krios");
// graph.addNode("Tali");

// graph.addEdge("Kyle", "Anna"); // the relations is "Node1" loves "Node2"
// graph.addEdge("Anna", "Kyle");
// graph.addEdge("Kyle", "Krios");
// graph.addEdge("Kyle", "Tali");
// graph.addEdge("Anna", "Krios");
// graph.addEdge("Anna", "Tali");
// graph.addEdge("Krios", "Anna");
// graph.addEdge("Tali", "Kyle");

// console.log(graph.print());

//THIS EXAMPLES IS WITH THE SEARCH
// const graph = createGraph(true);
// const nodes = ["a", "b", "c", "d", "e", "f"];

// const edges = [
//   ["a", "b"],
//   ["a", "e"],
//   ["a", "f"],
//   ["b", "d"],
//   ["b", "e"],
//   ["c", "b"],
//   ["d", "c"],
//   ["d", "e"]
// ];

// nodes.forEach(node => graph.addNode(node));
// edges.forEach(nodes => graph.addEdge(...nodes));

// graph.breadthFirstSearch("a", node => {
//   console.log(node.key);
// });

// graph.depthFirstSearch("a", node => {
//   console.log(node.key);
// });
