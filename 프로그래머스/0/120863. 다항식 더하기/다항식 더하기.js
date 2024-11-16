function solution(polynomial) {
    const terms = polynomial.split(" + "); 
    let xSum = 0;
    let constantSum = 0;

    for (const term of terms) {
        if (term.includes("x")) {
            const coefficient = term === "x" ? 1 : parseInt(term.replace("x", ""));
            xSum += coefficient;
        } else {
            constantSum += parseInt(term);
        }
    }

    const xPart = xSum === 0 ? "" : xSum === 1 ? "x" : `${xSum}x`;
    const constantPart = constantSum === 0 ? "" : `${constantSum}`;

    return [xPart, constantPart].filter(Boolean).join(" + ");
}
