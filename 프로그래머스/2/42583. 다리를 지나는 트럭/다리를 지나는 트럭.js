function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    let bridge = Array(bridge_length).fill(0); 
    let totalWeight = 0;

    while (truck_weights.length > 0 || totalWeight > 0) {
        time++;

        totalWeight -= bridge.shift();

        if (truck_weights.length > 0) {
            if (totalWeight + truck_weights[0] <= weight) {
                const nextTruck = truck_weights.shift();
                bridge.push(nextTruck);
                totalWeight += nextTruck;
            } else {
                bridge.push(0);
            }
        } else {
            bridge.push(0);
        }
    }

    return time;
}
