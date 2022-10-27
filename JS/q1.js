let s = "A man, a plan, a canal: Panama";

let s1 = "race a car";

let s2 = "";

function checkPalindrome(str) {
  str = str.toLowerCase();
  str = str.replace(/[^a-z0-9]/gi, "");
  let holderStr = str;
  let reverseStr = holderStr.split("").reverse().join("");
  if (holderStr === reverseStr) {
    console.log("true");
  } else {
    console.log("false");
  }
}

checkPalindrome(s);
