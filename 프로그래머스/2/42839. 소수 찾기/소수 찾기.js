function solution(numbers) {
    const nums = numbers.split('');
    const numberSet = new Set();

    function isPrime(n) {
        if (n <= 1) return false;
        if (n === 2) return true;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return true;
    }

    function dfs(current, visited) {
        if (current.length > 0) {
            numberSet.add(parseInt(current));
        }

        for (let i = 0; i < nums.length; i++) {
            if (!visited[i]) {
                visited[i] = true;
                dfs(current + nums[i], visited);
                visited[i] = false;
            }
        }
    }

    dfs("", new Array(nums.length).fill(false));

    let answer = 0;
    for (let num of numberSet) {
        if (isPrime(num)) answer++;
    }

    return answer;
}
