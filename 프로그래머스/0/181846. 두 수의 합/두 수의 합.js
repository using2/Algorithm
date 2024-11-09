function solution(a, b) {
    let carry = 0;
    let result = [];
    let maxLen = Math.max(a.length, b.length);

    a = a.padStart(maxLen, '0');
    b = b.padStart(maxLen, '0');

    for (let i = maxLen - 1; i >= 0; i--) {
        const sum = parseInt(a[i]) + parseInt(b[i]) + carry;
        result.unshift(sum % 10);
        carry = Math.floor(sum / 10);
    }

    if (carry > 0) result.unshift(carry);

    return result.join('');
}