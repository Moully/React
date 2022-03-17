function pascal(depth) {
  let array = [[1]];
  for (i = 1; i < depth; i++) {
    let b = Math.pow(11, i);
    b = "" + b;
    let myArray = b.split("");
    let aash = myArray.map((e) => {
      return parseInt(e);
    });
    // console.log(aash);
    // myArray = [parseInt(myArray)];
    array.push(aash);
    // console.log(array);
    // for (j = 0; j <= myArray.length; j++) {
    //   let num = myArray.pop();
    //   num = parseInt(num);
    //   array.push(num);
  }
  console.log(array);
  //   }
  //   console.log([array]);
}
// pascal(5);

let b = Math.pow(11, 11);

console.log(b);
