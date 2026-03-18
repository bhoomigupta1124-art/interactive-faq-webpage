let students = [
{ name: 'Alice', age: 22, scores: [78, 85, 92] },
{ name: 'Bob', age: 20, scores: [88, 90, 76] },
{ name: 'Charlie', age: 21, scores: [95, 80, 85] }
];

function findTopStudent(students) {

    let topStudent = "";
    let highestAverage = 0;

    students.forEach(student => {

        let sum = 0;

        student.scores.forEach(score => {
            sum += score;
        });

        let avg = sum / student.scores.length;

        console.log(student.name + " Average Score: " + avg);

        if (avg > highestAverage) {
            highestAverage = avg;
            topStudent = student.name;
        }

    });

    console.log("Top Student:", topStudent, "with an average score of", highestAverage);
}

findTopStudent(students);