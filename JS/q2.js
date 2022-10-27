let nums = [4, 1, 2, 1, 2];
let counter = 0;

function checkArrey(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    let tmp = numbers[i];
    for (let j = 0; j < numbers.length; j++) {
      if (tmp === numbers[j]) {
        counter++;
      }
    }
    if (counter === 1) {
      return console.log(numbers[i]);
    } else {
      counter = 0;
    }
  }
}

checkArrey(nums);
