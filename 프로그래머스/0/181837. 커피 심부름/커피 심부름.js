function solution(order) {
    const AMERICANO_PRICE = 4500;
    const CAFE_LATTE_PRICE = 5000;
    let totalCost = 0;

    for (let item of order) {
        if (item.includes("americano") || item === "anything") {
            totalCost += AMERICANO_PRICE;
        } else if (item.includes("cafelatte")) {
            totalCost += CAFE_LATTE_PRICE;
        }
    }

    return totalCost;
}