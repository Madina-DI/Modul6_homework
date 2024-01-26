function evenoddArray () {
    let zeroElement = 0;
    let oddElement = 0;
    let evenElement = 0;
for (let i=0; i < Array.length; i++) {
    if (typeof Array[i] !== "number") {
      continue
    } else if (Array[i] === 0) {
      zeroElement++
    } else if (Array[i] % 2) {
      oddElement++;
    } else {
      evenElement++;
    }
}
console.log(`zeroElement ${zeroElement}`)
console.log(`oddElement ${oddElement}`);
console.log(`evenElement ${evenElement}`);
}
const Array = [1, 2, null, 4, 5, 6, 7, 8, 9, 0, "0", undefined, {1: 0}];
evenoddArray ();