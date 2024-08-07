let year = 2000, month = 2, day;

if (year % 4 == 0 && month == 2) day = 29;
else if (month == 2) day = 28;
else if (month == 1, 3, 5, 7, 8, 11) day = 31;
else day = 30;
console.log(year + '年的' + month + '月有' + day + "天")