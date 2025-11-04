// 01-js-github/week1-js/day1.js
//Xuanan - @Xuanandev
//Backend-focused (70%) | Start :04/11/2025
// Mục tiêu: thực tập 10tr 
const dev= {
  name: "Nguyễn Xuân An",
  github:"Xuanandev",
  school:"HUBT",
  focus:"Backend(Node.js + Sql)",
  goad:"Thực tập 10tr"
};
//Bài tập : In thông tin + tuổi
const currentYear= new Date().getFullYear();
const age= currentYear -2025;
console.log('[HELLO}${dev.name}(@${dev.github}');
console.log('[AGE]${age} tuổi');
console.log('[SCHOOL]${dev.school}');
console.log('[FOCUS]${dev.focus}');
console.log('[GOAl]${dev.goal}');
