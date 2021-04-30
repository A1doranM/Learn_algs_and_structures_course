// Поиск кратчайшего пути в графе

//Create graph ogject;
const graph = {
    start: {A: 5, B: 2},
    A: {C: 4, D: 2},
    B: {A: 8, D: 7},
    C: {D: 6, finish: 3},
    D: {finish: 1},
    finish: {}
};

function findLowestWeightNode(weights, processed) {
    const knownNodes = Object.keys(weights);

    const lowestWeightNode = knownNodes.reduce((lowest, node) => {
        if (lowest === null && !processed.includes(node)) {
            lowest = node;
        }
        if (weights[node] < weights[lowest] && !processed.includes(node)) {
            lowest = node;
        }
        return lowest;
    }, null);

    return lowestWeightNode;
}

function dijkstra(graph) {

    // track lowest cost to reach each node;
    const weights = Object.assign({finish: Infinity}, graph.start);
    console.log("INIT_WEIGHTS: ", weights);

    // track paths;
    const parents = {finish: null};
    for (let child in graph.start) {
        parents[child] = "start";
    }
    console.log("INIT_PARENTS: ", parents);

    // track nodes that have already been processed;
    const processed = [];

    // Next, we’ll set the initial value of the node being processed
    // using the lowestCostNode function. Then, we’ll begin a while loop,
    // which will continuously look for the cheapest node;

    let node = findLowestWeightNode(weights, processed);
    console.log("INIT_NODE: ", node);

    while (node) {
        console.log("-----------STEP START--------------");
        console.log("NODE: ", node);
        // Get the weight of the current node;
        let weight = weights[node];
        console.log("WEIGHT: ", weight);

        // Get all the neighbors of current node;
        let children = graph[node];
        console.log("CHILDREN: ", children);

        // Loop through each of the children, and calculate the weight to
        // reach that child node. We'll update the weight of that node in
        // the weights object if it is lowest or the ONLY weight available
        for (let n in children) {
            console.log("NODE FOR UPDATE: ", n, "\n  WEIGHT: ", children[n]);
            console.log("  INITIAL_WEIGHT: ", weights[n]);
            let newWeight = weight + children[n];
            console.log("  NEW WEIGHT: ", newWeight);
            console.log("  WEIGHTS NEED UPDATE: ", !weights[n] || weights[n] > newWeight);
            if (!weights[n] || weights[n] > newWeight) {
                weights[n] = newWeight;
                parents[n] = node;

                console.log("  UPDATED WEIGHTS: ", weights[n]);
                console.log("  UPDATED PARENTS: ", parents[n]);
            }
        }
        console.log("WEIGHTS ARR: ", weights);
        console.log("PARENTS ARR: ", parents);

        // push processed data into its data structure;
        processed.push(node);
        console.log("PROCESSED: ", processed);

        //repeat until we processed all of our nodes.
        node = findLowestWeightNode(weights, processed);
        console.log("NEXT NODE WITH LOWEST COST: ", node);
        console.log("-----------STEP END--------------");
    }

    console.log("-------------BEGIN FINDING OPTIMAL PATH--------------");

    let optimalPath = ["finish"];
    console.log("OPTIMAL PATH: ", optimalPath);

    let parent = parents.finish;
    console.log("PARENT OF FINISH NODE: ", parent);

    while (parent) {
        optimalPath.unshift(parent);
        console.log("OPTIMAL PATH: ", optimalPath);
        parent = parents[parent]; // add parent to start of path array;
        console.log("PARENT OF CURRENT PARENT: ", parent);
    }

    const results = {
        distance: weights.finish,
        path: optimalPath
    };

    console.log("RESULT: ", results);
    return results;
}

dijkstra(graph);
