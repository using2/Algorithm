function solution(park, routes) {
    const directions = {
        "N": [-1, 0],
        "S": [1, 0],
        "W": [0, -1],
        "E": [0, 1]
    };

    let answer = [0, 0];

    for (let i = 0; i < park.length; i++) {
        for (let j = 0; j < park[i].length; j++) {
            if (park[i][j] === "S") {
                answer = [i, j];
                break;
            }
        }
    }

    for (let route of routes) {
        let [dir, dist] = route.split(" ");
        dist = parseInt(dist);
        const [dx, dy] = directions[dir];

        let [x, y] = answer;
        let isBlocked = false;

        for (let i = 1; i <= dist; i++) {
            let nx = x + dx * i;
            let ny = y + dy * i;

            if (
                nx < 0 || ny < 0 ||
                nx >= park.length || ny >= park[0].length ||
                park[nx][ny] === "X"
            ) {
                isBlocked = true;
                break;
            }
        }

        if (!isBlocked) {
            answer[0] += dx * dist;
            answer[1] += dy * dist;
        }
    }

    return answer;
}