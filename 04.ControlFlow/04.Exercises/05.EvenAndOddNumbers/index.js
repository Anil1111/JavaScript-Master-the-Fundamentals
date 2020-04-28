showNumbers(10);

// function showNumbers(limit) {
//   for (i = 0; i <= limit; i++) {
//     if (i % 2 === 0) console.log(i, "Even");
//     else console.log(i, "ODD");
//   }
// }

function showNumbers(limit) {
  for (i = 0; i <= limit; i++) {
    const message = i % 2 === 0 ? "EVEN" : "ODD";
    console.log(i, message);
  }
}
