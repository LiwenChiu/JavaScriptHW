let arr = [];
for (let i = 0; i <= 7; i++) {
    arr[i] = [];
    let a = 9 - i;
    for (let b = 2; b <= a; b++) {
        arr[i].push(a * b);
    }
}
console.log(arr)