// Data
const teo = {
  name: 'Teo',
  grades: [9, 8, 6],
};
const ti = JSON.parse(JSON.stringify(teo));
ti.name = 'Ti';
ti.grades = [7, 9, 9];

const tun = JSON.parse(JSON.stringify(teo));
tun.name = 'Tun';
tun.grades = [6, 7, 8];

// Usage
const bestStudentInfo = findBestStudent([teo, ti, tun]);
const { bestStudent, currentHighestScore } = bestStudentInfo;

console.log(
  `The best student with highest avg score is: ${JSON.stringify(bestStudent)} with avg score: ${currentHighestScore}`,
);

// Controller
function findBestStudent(students) {
  let bestStudent = students[0];
  let currentHighestScore = 0;
  for (const student of students) {
    // dùng for of khi muốn truy cập từng value của array nhưng k muốn thay đổi giá trị của nó
    const avgScore = calculateAvgScore(student);
    if (avgScore > currentHighestScore) {
      currentHighestScore = avgScore;
      bestStudent = student;
    }
  }
  return { bestStudent: bestStudent, currentHighestScore: currentHighestScore }; // tương đương với return { bestStudent, currentHighestScore }
}

function calculateAvgScore({ grades }) {
  let totalScore = 0;
  for (const grade of grades) {
    totalScore += grade;
  }
  return Math.ceil(totalScore / grades.length);
}
