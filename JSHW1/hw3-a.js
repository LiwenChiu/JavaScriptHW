let number = 10;
let sum = 0;
for (a = 1; a <= number; a++) {
    if (a % 3 == 0) sum += a //3的倍數
    if (a % 4 == 0) sum += a //4的倍數
}
console.log("3的倍數和4的倍數總和 : " + sum)