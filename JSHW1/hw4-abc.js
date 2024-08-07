//隨機5個數的陣列
let array = [];
let value = Math.floor(Math.random() * 10)
for (let i = 0; i < 5; i++) {
    while (array.indexOf(value) > (-1)) {
        value = Math.floor(Math.random() * 10)
    }
    array[i] = value;
}
console.log(array)

//陣列總和及平均
let sum = 0; avg = 0;
for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
avg = sum / array.length;
console.log("陣列總和為" + sum + "\n陣列平均為" + avg);

//陣列排序
console.log("排序後陣列為:");
console.log(array.sort())

//判斷平均介於哪兩數之間
if (array.indexOf(avg) > (-1)) {
    console.log("和平均一樣的數是" + avg)
}
else {
    for (let i = 0; i < array.length; i++)
        if (array[i] < avg && avg < array[i + 1]) {
            console.log("平均" + avg + "介於" + array[i] + "和" + array[i + 1] + "之間")
            break;
        }
}