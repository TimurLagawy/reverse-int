module.exports = function reverse(n) {
    if (n < 0) {
        n = n * -1;
    }
    let str = "" + n;
    let str1 = str.split("").reverse().join("");
    return Number(str1);
};
