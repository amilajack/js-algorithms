class PriorityQueue {
    constructor() {
        this.vertices = [];
    }

    /* Each node added will be an object with node-value and weight.
       Iterate through the verices and insert node before the first element found that has a larger weight than the node.
       lower weight = higher priority
    */
    enqueue(element,priority) {
        if(this.isEmpty()) {
            this.vertices.push({value:element, weight: priority});
        } else {
            let added = false;
            for(let i=1; i<= this.vertices.length; i++) {
                if( priority < this.vertices[i-1]["weight"]) {
                    this.vertices.splice(i-1,0,{value:element, weight: priority});
                    added = true;
                    break;
                }
            }
            if(!added) {
                this.vertices.push({value:element, weight: priority});
            }
        }
    }

    // Removes first element from priority queue
    dequeue() {
        let node = this.vertices.shift();
        return node;
    }

    // Helper method to check if queue is empty
    isEmpty() {
        return this.vertices.length === 0;
    }
}

class Node {
    constructor(value,weight) {
        value = this.value;
        weight = this.weight;
    }
}

class Graph {
    constructor() {
        this.nodes = [];
        this.adjacencyList = {};
      }

    addVertex(vertex) {
        this.nodes.push(vertex);
        this.adjacencyList[vertex] = [];
        return vertex;
    }

    addEdge(vertex1, vertex2, weight) {
        if(!this.nodes.includes(vertex1)) {
            this.addVertex(vertex1);
        }
        if(! this.nodes.includes(vertex2)) {
            this.addVertex(vertex2);
        }

        this.adjacencyList[vertex1].push({value: vertex2, weight: weight});
        this.adjacencyList[vertex2].push({value: vertex1, weight: weight});
    }

    dijkastraAlgo(startNode) {
        let distances = {};
        let previous = {}; //ref to previous node
        let pq = new PriorityQueue();

        /* Set distances to all nodes except start to infinite */
        distances[startNode] = 0;
        pq.enqueue(startNode,0);
        this.nodes.forEach(node => {
            if( node !== startNode) {
                distances[node] = Infinity;
            }
            previous[node] = null;
        });


        while(!pq.isEmpty()) {
            let minnode = pq.dequeue();
            let currentNode = minnode.value;
            let currentWeight = minnode.weight;

            this.adjacencyList[currentNode].forEach(neighbour => {
                let tempWeight = distances[currentNode] + neighbour["weight"];
                if(tempWeight< distances[neighbour.value]) {
                    distances[neighbour.value] = tempWeight;
                    previous[neighbour.value] = currentNode;
                    pq.enqueue(neighbour.value,distances[neighbour.value]);
                }
            });
        }
        return distances;
    }
}


let graph = new Graph();
graph.addEdge("A","C",3);
graph.addEdge("A","B",7);
graph.addVertex("D");
graph.addEdge("C","D",2);
graph.addEdge("D","B",2);
graph.addEdge("B","E",6);
graph.addEdge("D","E",4);
graph.addEdge("C","B",1);

graph.dijkastraAlgo("A");
//{A: 0, C: 3, B: 4, D: 5, E: 9}



let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addVertex("G");

g.addEdge("A", "C", 100);
g.addEdge("A", "B", 3);
g.addEdge("A", "D", 4);
g.addEdge("D", "C", 3);
g.addEdge("D", "E", 8);
g.addEdge("E", "F", 10);
g.addEdge("B", "G", 9);
g.addEdge("E", "G", 50);
g.dijkastraAlgo("A");
//{ A: 0, B: 3, C: 7, D: 4, E: 12, F: 22, G: 12 }
