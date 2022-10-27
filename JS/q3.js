let str = "   -0042647";

function myAtoi(str) {
  str = str.split("");
  let newArray = [];
  let signHolder = 0;

  str.forEach((element) => {
    if (element === "-") {
      signHolder++;
    } else if (element >= "0" && element <= "9") {
      newArray.push(element);
    }
  });

  newArray = newArray.join("");
  let finalNum = Number.parseInt(newArray, 10);

  if (signHolder === 1) {
    finalNum = finalNum * -1;
  }

  if (finalNum <= Math.pow(-2, 31)) {
    finalNum = Math.pow(-2, 31);
  } else if (finalNum >= Math.pow(2, 31) - 1) {
    finalNum = Math.pow(2, 31) - 1;
  }

  console.log(finalNum);
}

myAtoi(str);
