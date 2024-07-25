let c = 1;
function outerOuter() {
  console.log(c);
  let b = 2;
  function outer() {
    console.log(b);
    let a = 3;
    function inner() {
      console.log(a);
    }
    inner();
  }
  outer();
}
outerOuter();