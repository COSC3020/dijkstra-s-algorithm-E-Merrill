function dijkstra(graph, sourceNode) {
    
    // If user enters a startnode that doesn't exist, just give them an empty 
    // array because you can't go from something that doesn't exist to something
    // that does exist (and also because it's easy and I'm lazy)
    
    if(sourceNode > graph.length){
        return [];
    }
    
    // Nothing to do if graph has no nodes

    if(graph.length == 0){
        return [];
    }

    // Initialize distance to every node as infinity,
    // except for the starting node, which is 0

    let dists = Array(graph.length).fill(Infinity);
    dists[sourceNode] = 0;
    let node = sourceNode;

    // Keeping track of which nodes have been visited. 

    let visited = new Set();

    // Optional array to keep track of the previous node that was in the sequence
    // for the shortest path to a given node
    
    //let previous = Array(graph.length).fill(0);
    
    while(visited.size < graph.length){
        
        // Finding the shortest path from the current node 
        // to the next one. Optionally, can keep track of the previous node 
        // that had the shortest path to recreate the path you took

        for(let i = 0; i < graph.length; i++){
            if(graph[node][i] > 0 && !visited.has[i]){
                if((dists[node] + graph[node][i]) < dists[i]){
                    dists[i] = graph[node][i] + dists[node];
                    // previous[i] = node;
                }
            }
        }

        // Marking a node as visited as to not traverse it again 

        visited.add(node);

        let short = Infinity;
        let next = node;

        // Selecting which node path to take, having that node be the next node, and 
        // making sure that we don't travel to an already visited node. 

        for(let i = 0; i < graph.length; i++){
            if(dists[i] < short && !visited.has(i)){
                short = dists[i];
                next = i;
            }
        }
        
        // Current node has no unvisited neighbors, so the above for loop didn't iterate
        // and next did not change from the current node

        if(next == node){
            break;
        }

        node = next;
    }

    return dists;
}
