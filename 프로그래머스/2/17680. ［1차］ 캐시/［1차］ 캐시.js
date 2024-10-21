function solution(cacheSize, cities) {
    var answer = 0;
    let cache = [];
    let order = [];

    cities.forEach((city) => {
        city = city.toLowerCase();

        if (cacheSize === 0) {
            answer += 5;
            return;
        }

        if (cache.includes(city)) {
            answer += 1;
            order = order.filter(e => e !== city);
        } else {
            answer += 5;
            if (cache.length === cacheSize) {
                const LRU = order.pop();
                cache = cache.filter(e => e !== LRU);
            }
            cache.push(city);
        }

        order.unshift(city);  
    });

    return answer;
}