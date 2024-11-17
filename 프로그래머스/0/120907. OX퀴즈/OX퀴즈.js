function solution(quiz) {
    return quiz.map(q => {
        const [X, operator, Y, , Z] = q.split(" ");

        const result = operator === "+"
            ? Number(X) + Number(Y)
            : Number(X) - Number(Y);

        return result === Number(Z) ? "O" : "X";
    });
}
