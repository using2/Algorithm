function solution(bin1, bin2) {
    let result = "";
    let carry = 0;
    const maxLength = Math.max(bin1.length, bin2.length);

    for (let i = 0; i < maxLength; i++) {
        const bit1 = i < bin1.length ? Number(bin1[bin1.length - 1 - i]) : 0;
        const bit2 = i < bin2.length ? Number(bin2[bin2.length - 1 - i]) : 0;
        const sum = bit1 + bit2 + carry;
        result = (sum % 2).toString() + result;
        carry = Math.floor(sum / 2);
    }

    if (carry > 0) {
        result = carry.toString() + result;
    }

    return result;
}