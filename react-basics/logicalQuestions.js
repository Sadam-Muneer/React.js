const firstname = fun();

function fun() {
  let name = "Sadam";
  return `My name is ${name} Muneer`;
}
console.log(firstname);

const myname = funct();
let names = "sadam";
function funct() {
  console.log(names);
}
// Error -: Cannot access 'name' before initialization

// -------------------

const call = (a) => {
  return (b) => {
    return (c) => {
      return a * b * c;
    };
  };
};
console.log("output with arrow function", mul(2)(4)(6));
// Error -:  The function is named call, but in the console.log, you're trying to call a function named mul

// ------------------

function mul(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
}
console.log("output with normal function", mul(2)(4)(6));

// ---------
const call2 = (a) => {
  return (b) => {
    return (c) => {
      return a * b * c;
    };
  };
};
console.log("output with arrow function", call2(2)(4)(6));

function fun(a) {
  let myPromise = new Promise((myResolve, myReject) => {
    // The producing code (this may take some time)
    if (a < 5) {
      myResolve(`Number is less than 5: ${a}`);
    } else {
      myReject("Error: Number is 5 or greater");
    }
  });

  myPromise
    .then((result) => {
      console.log(result); // Log the resolved value
    })
    .catch((error) => {
      console.log(error); // Log the rejection reason
    });
}

fun(3); // This will resolve and log: Number is less than 5: 3
fun(6); // This will reject and log: Error: Number is 5 or greater
