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
const markHigherBMI = markBMI > johnBMI
// console.log(markHigherBMI);
