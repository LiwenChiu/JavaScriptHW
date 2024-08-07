const mySkills = ['javascript', 'java', 'sql', 'c', 'python', 'php', 'swift'];
let str = mySkills.join();
function countletter(str, letter) {
    let count = 0;
    for (let index = 0; index < str.length; index++) {
        if (str[index] == letter) count++;
    }
    console.log(`${letter} : ${count}`);
}

countletter(str, "j");
countletter(str, "a");
countletter(str, "v");
countletter(str, "s");
countletter(str, "c");
countletter(str, "r");
countletter(str, "i");
countletter(str, "p");
countletter(str, "t");
countletter(str, "q");
countletter(str, "l");
countletter(str, "y");
countletter(str, "h");
countletter(str, "o");
countletter(str, "n");
countletter(str, "w");
countletter(str, "f");