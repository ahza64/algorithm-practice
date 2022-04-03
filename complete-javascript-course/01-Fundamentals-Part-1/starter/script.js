// Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.

/*Challenge 1*/

const johnMass = 85
const johnHeight = 1.76
const markMass = 95
const markHeight = 1.88

const markBMI = markMass / markHeight ** 2
const johnBMI = johnMass / (johnHeight * johnHeight)
// const markHigherBMI = markBMI > johnBMI
// console.log(markHigherBMI);

/*Challenge 2*/
if (markBMI > johnBMI) {
  // console.log(`Mark's BMI ${markBMI} is higher than John's BMI ${johnBMI}!`);
} else {
  // console.log(`John's BMI ${johnBMI} is higher than Mark's BMI ${markBMI}!`);
}

/*Challenge 3*/
//Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
const dolphinsAvg = (97 + 112 + 101) / 3
const koalasAvg = (109 + 95 + 106) / 3
if (dolphinsAvg && koalasAvg > 100) {
  if (dolphinsAvg === koalasAvg) {
    console.log(`tie dolphins ${dolphinsAvg}, koalas ${koalasAvg}`);
  } else if (dolphinsAvg > koalasAvg) {
    console.log(`dolphins win ${dolphinsAvg}`);
  } else {
    console.log(`koalas win ${koalasAvg}`);
  }
} else {
  console.log(`one score needs to average above 100 dolphins ${dolphinsAvg}, koalas ${koalasAvg}`);
}
