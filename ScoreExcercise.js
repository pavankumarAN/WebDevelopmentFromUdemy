const students = [
    {name : "Pavan", score : 55},
    {name : "Vinay", score : 58},
    {name : "Sujay", score : 51},
    {name : "Vidya", score : 53}
];
let totalScore = 0;
for(let ele of students) {
    totalScore+=ele.score;
}
console.log(totalScore);
let avgScore = totalScore/students.length;
console.log(`The average score of ${students.length} students is ${avgScore}`);
for(let ele of students) {
    if(ele.score>avgScore) {
        ele.betterThanAvgScore = true;
    }
    else {
        ele.betterThanAvgScore = false;
    }
}
console.log(students);