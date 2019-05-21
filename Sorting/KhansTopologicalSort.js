/**
 * A vertex with no incoming edges must be used to start the search
 */

 class Node {

 	constructor(data) {
 		this.data = data;
 		this.inDegree = 0;												// Stores the indegree for each Node
 		this.tempInDegree = 0;											// Used later in the toplogicalSort subroutine to prevent two linear scans of the graph by computing inDegree from the instance member
 		this.outgoing = []												// Stores the nodes out of "this" node
 	}

 	addOutgoing(node) {													// Adds the node to "this"'s outgoing list. Also increment node's inDegree.
 		node.inDegree++;
 		this.outgoing.push(node);
 	}
 }

 class DAG {

 	constructor() {
 		this.nodes = []													// The graph stores all the Nodes/
 	}

 	addNode(node) {
 		this.nodes.push(node);											// Add Nodes to the graph.
 	}

 	topologicalSort() {

 		var topSort = [];												// Record the topological order

 		for (var i = 0; i < this.nodes.length; ++i) {					// Go through each node in the graph and correctly update the tempInDegree using inDegree. This reduces the complexity from O(V+E) to O(V)
 			this.nodes[i].tempInDegree = this.nodes[i].inDegree;
 			if (this.nodes[i].tempInDegree == 0)						// At the same time, if you encounter any nodes whose inDegree is 0, we know we can start it, so push it to the topSort.
 				topSort.push(this.nodes[i]);
 		}

 		var start = 0;													// if start == topSort.length, then we are done with topological sort.
 		while (start != topSort.length) {
 			var u = topSort[start];										// Get the Node u which needs to be popped from the list with inDegree 0 and increment start to look at the next node in the next iteration.
 			start++;	
 			for (var i = 0; i < u.outgoing.length; ++i) {				// Check u's outgoing Nodes and decrement their inDegrees by 1. If their inDegrees goes to 0, add them to our topSort.
 				if (--u.outgoing[i].tempInDegree == 0)
 					topSort.push(u.outgoing[i])
 			}
 		}

 		if (topSort.length != this.nodes.length) {						// After the end of the above loop, if our topologically sorted list length is not the same as the number of nodes in the graph,
 			console.log("Cyclic Graph!");								// then we have a cycle and we cannot continue.
            return;
        }

 		return topSort;													// return sorted DAG graph.
 	}

 }

function test() {														// TEST Function. Order of class is as follows:
	var dag = new DAG();												// CS 46A, Math42 -> CS 46B -> CS 146 -> CS 151A, 157A -> CS 152 -> CS 154

	var cs146 = new Node("CS146");										// CS 47 -> CS 147.
	var math42 = new Node("Math42");									// Note that CS 46A, Math 42, CS 47 are the start points so that they can be taken in any order, but anything after that must follow the exact same order.
	var cs46a = new Node("CS46a");
	var cs46b = new Node("CS46b");
	var cs47 = new Node("CS47");
	var cs157a = new Node("CS157a");
	var cs151 = new Node("CS151");
	var cs152 = new Node("CS152");
	var cs147 = new Node("CS147");
	var cs154 = new Node("CS154");

	cs46a.addOutgoing(cs46b);
	cs46b.addOutgoing(cs146);
	math42.addOutgoing(cs46b);
	cs47.addOutgoing(cs147);
	cs146.addOutgoing(cs157a);
	cs146.addOutgoing(cs151);
	cs151.addOutgoing(cs152);
	cs146.addOutgoing(cs154);
	cs152.addOutgoing(cs154);

	dag.addNode(cs46a);
	dag.addNode(cs46b);
	dag.addNode(cs146);
	dag.addNode(math42);
	dag.addNode(cs47);
	dag.addNode(cs157a);
	dag.addNode(cs151);
	dag.addNode(cs152);
	dag.addNode(cs154);
	dag.addNode(cs147);

	var sortedNodes = dag.topologicalSort();

	for (var i = 0; i < sortedNodes.length; i++) {
		console.log(sortedNodes[i].data);
	}
}

test();
