const sentence = "hello there from lighthouse labs";
const sentenceEnd = sentence + '\n';
let time = 0;
for (const char of sentenceEnd) {
  setTimeout(() => {
    process.stdout.write(char);
  }, time);
  time += 50;
}

// setTimeout(() => {
//   console.log('\n');
// }, time);