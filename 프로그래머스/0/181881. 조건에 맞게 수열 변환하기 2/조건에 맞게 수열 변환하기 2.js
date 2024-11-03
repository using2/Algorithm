function solution(arr) {
    let x = 0;
    let prevArr = [...arr];  

    while (true) {
        const newArr = prevArr.map(num => {
            if (num >= 50 && num % 2 === 0) {
                return num / 2;
            } else if (num < 50 && num % 2 === 1) {
                return num * 2 + 1;
            }
            return num;
        });

        if (prevArr.every((val, idx) => val === newArr[idx])) {
            return x;
        }

        prevArr = newArr;
        x++;
    }
}