// question 1
for (let i = 15; i <= 25; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
// question 2
let innerFunction = (iAmFunc = () => {
  console.log("I am a function");
});
let outerFunction = (x) => {
  x();
};
outerFunction(innerFunction);
