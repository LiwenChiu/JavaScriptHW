let n = 10;
let sum = 0;

//檢查從3到n的質數
for (let i = 3; i <= n; i++) {
    let is質數 = true;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            is質數 = false;
            break;
        }
    }
    if (is質數) {
        sum += i;
    }
}

//最後再加上質數2
console.log(sum + 2);

