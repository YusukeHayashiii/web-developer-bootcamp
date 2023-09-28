// 1問目
console.log('1問目')
let score = 85;
// ここから書いてください
if (score >= 90) {
    console.log('優秀');
} else if (score < 70) {
    console.log('不可');
} else {
    console.log('普通');
}


// 2問目
console.log('2問目')
let numbers = [1, 2, 3, 4, 5, 6];
// ここから書いてください
let sum = 0;
for (let i=0; i<5; i+=2) {
    sum = sum + numbers[i];
    console.log(sum);
}
console.log(sum)


// 3問目
console.log('3問目')
let student = {
    name: "Alice",
    grades: [85, 92, 78]
};
// ここから書いてください
let sum_3 = 0;
let ave = 0;
for (let i=0; i<student.grades.length; i+=1) {
    sum_3 = sum_3 + student.grades[i];
}
ave = sum_3 / student.grades.length;
console.log(ave);


// 4問目
console.log('4問目')
// ここから書いてください
function add(a,b) {
    return a + b;
}
console.log(add(1,7));


// 5問目
console.log('5問目')
let numList = [1, 2, 3, 4, 5];
// ここから書いてください
let doubledN = numList.map(function (num) {
    return num * 2;
})
console.log(doubledN);


// 6問目
console.log('6問目')
let head = document.querySelector('h1');
console.log(head.textContent)


// 7問目
let button = document.querySelector('button');
button.addEventListener("click", () => {
    console.log('clicked!!!');
});