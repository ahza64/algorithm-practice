

// function delclaratoin
function calcAge1(birthYear) {
  return 2037 - birthYear
}
const age1 = calcAge1(1991)

// function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear
}
const age2 = calcAge2(1981)

// hoisting prevents function expressions being called before they are declared
// arrow functions are function expressions that passes parent "this" object
const calcAge3 = birthYear => 2037 - birthYear
const age3 = calcAge3(1971)
// console.log(age1, age2, age3);



/* Challenge 1 */
// const calcAvg = (sc1, sc2, sc3) => (sc1 + sc2 + sc3) / 3
// const dol = calcAvg(44,23,71)
// const koal = calcAvg(65,54,49)
//
// const checkWinner = function(avgDol, avgKoal) {
//   if (avgDol >= 2 * avgKoal) {
    // console.log(`dol win ${avgDol} v ${avgKoal}`);
  // } else if (avgKoal < 2 * avgDol) {
    // console.log(`koal win ${avgKoal} v ${avgDol}`);
  // } else {
    // console.log(`no winner dol`);
//   }
// }
// checkWinner(dol, koal)


/* Challenge 2 */
// const calcTip = function(bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
// }

// const bills = [125, 555, 44]
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]


/* Challenge 3 */
const mark = {
  fullName: "Mark Killer",
  mass: 78,
  height: 1.69,
  calcBMI: function() {
    this.bmi = this.mass / this.height ** 2
    return this.bmi
  }
}

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95
}

mark.calcBMI()
// console.log(mark.bmi);


/* Challenge 4 */
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tips = []
const totals = []
const calcTip = function(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
}
for (var i = 0; i < bills.length; i++) {
  tips[i] = calcTip(bills[i])
  totals[i] = tips[i] + bills[i]
}
const calcAvg = (arr) => {
  let sum = 0
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum / arr.length
}

console.log(calcAvg(totals));





//.
