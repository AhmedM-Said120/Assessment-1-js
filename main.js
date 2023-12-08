

/*  1  */

var userEnterNumber = prompt("Enter Number");

var enteredNumber = Number(userEnterNumber);

if (userEnterNumber) {
  document.getElementById("ueserInput1").innerHTML =
    "your number is " + enteredNumber;
}
/* END  */

/* 2 */
var userEnterNumberDivide = prompt("Enter Number Divide");

var enteredNumberDivide = Number(userEnterNumberDivide);

if (userEnterNumberDivide % 3 == 0 && userEnterNumberDivide % 4 == 0) {
  document.getElementById("ueserInput2").innerHTML =
    "number is " + enteredNumberDivide + " yes";
} else {
  document.getElementById("ueserInput2").innerHTML =
    "number is " + enteredNumberDivide + " No";
}
/* END */
/* 3 */

var inputNum1 = prompt("num1");
var inputNUM1 = inputNum1;
var inputNum2 = prompt("num2");
var inputNUM2 = inputNum2;

if (inputNUM1 > inputNUM2) {
  console.log(inputNUM1);
} else if (inputNUM2 > inputNUM1) {
  console.log(inputNUM2);
}
/* END */

/* 4 */
var numNegativeAndPosativ = prompt("Enter Your Number Negative Or Positive");
var inputNumNegativeAndPosativ = numNegativeAndPosativ;
if (inputNumNegativeAndPosativ > 0) {
  console.log("the Number is posativ");
} else {
  console.log("the Number is negativ");
}

/* END */

/* 5 */
var num1 = parseInt(prompt("Enter the first number"));
var num2 = parseInt(prompt("Enter the second number"));
var num3 = parseInt(prompt("Enter the third number"));

if (num1 && num2 && num3) {
  var maxElement, minElement;

  if (num1 > num2) {
    maxElement = num1;
    minElement = num2;
  } else {
    maxElement = num2;
    minElement = num1;
  }

  if (num3 > maxElement) {
    maxElement = num3;
  } else if (num3 < minElement) {
    minElement = num3;
  }

  console.log("maximum element: " + maxElement);
  console.log("minimum element: " + minElement);
}
/* END */

/* 6 */
var userNumber = parseInt(prompt("Enter an integer:"));

if (userNumber) {
  if (userNumber % 2 === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}

/* END */

/* 7 */

var userChar = prompt("Enter a character:");
if (userChar.length === 1) {
  var lowerChar = userChar.toLowerCase();

  if (
    lowerChar === "a" ||
    lowerChar === "e" ||
    lowerChar === "i" ||
    lowerChar === "o" ||
    lowerChar === "u"
  ) {
    console.log("Vowel");
  } else {
    console.log("Consonant");
  }
} else {
  console.log("enter a single character.");
}

/* END */
/* 8 */

var userNumber = parseInt(prompt("Enter an integer:"));

if (userNumber) {
  for (var i = 1; i <= userNumber; i++) {
    console.log(i);
  }
}

/* END */
/* 9 */

var userNumber = parseInt(prompt("Enter an integer:"));

if (userNumber) {
  for (var i = 1; i <= 12; i++) {
    var result = userNumber * i;
    console.log(result);
  }
}
/* END */
/* 10 */
var userNumber = parseInt(prompt("Enter a number:"));

if (userNumber) {
  for (var i = 1; i <= userNumber; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

/* END */
/* 10 */

var base = parseInt(prompt("Enter the base (an integer):"));
var exponent = parseInt(prompt("Enter the exponent (an integer):"));

if (base && exponent) {
  var result = 1;

  for (var i = 0; i < exponent; i++) {
    result *= base;
  }

  console.log(result);
}
/* END */

/* 11 */
var marks1 = parseInt(prompt("Enter marks for subject 1:"));
var marks2 = parseInt(prompt("Enter marks for subject 2:"));
var marks3 = parseInt(prompt("Enter marks for subject 3:"));
var marks4 = parseInt(prompt("Enter marks for subject 4:"));
var marks5 = parseInt(prompt("Enter marks for subject 5:"));

if (marks1 && marks2 && marks3 && marks4 && marks5) {
  var totalMarks = marks1 + marks2 + marks3 + marks4 + marks5;
  var averageMarks = totalMarks / 5;
  var percentage = totalMarks / 500 * 100;

  console.log("Total Marks: " + totalMarks);
  console.log("Average Marks: " + averageMarks);
  console.log("Percentage: " + percentage);
}
/* END */
/* 12 */
var monthNumber = parseInt(prompt("Enter the month number "));

if (monthNumber && monthNumber >= 1 && monthNumber <= 12) {
  var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  var numberOfDays = daysInMonth[monthNumber - 1];

  console.log(monthNumber + " is: " + numberOfDays);
}
/* END */

/* 13 */

var physics = parseInt(prompt("Enter marks for Physics:"));
var chemistry = parseInt(prompt("Enter marks for Chemistry:"));
var biology = parseInt(prompt("Enter marks for Biology:"));
var mathematics = parseInt(prompt("Enter marks for Mathematics:"));
var computer = parseInt(prompt("Enter marks for Computer:"));

if (physics && chemistry && biology && mathematics && computer) {
  var totalMarks = physics + chemistry + biology + mathematics + computer;
  var percentage = totalMarks / 500 * 100;

  var grade;

  if (percentage >= 90) {
    grade = "A";
  } else if (percentage >= 80) {
    grade = "B";
  } else if (percentage >= 70) {
    grade = "C";
  } else if (percentage >= 60) {
    grade = "D";
  } else if (percentage >= 40) {
    grade = "E";
  } else {
    grade = "F";
  }

  console.log("Total Marks: " + totalMarks);
  console.log("Percentage: " + percentage + "%");
  console.log("Grade: Grade " + grade);
}
/* END */
// /* 15 */
var monthNumber = parseInt(prompt("Enter the month number"));

if (monthNumber && monthNumber >= 1 && monthNumber <= 12) {
  var numberOfDays;

  switch (monthNumber) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      numberOfDays = 31;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      numberOfDays = 30;
      break;
    case 2:
      var isLeapYear =
        (new Date().getFullYear() % 4 === 0 &&
          new Date().getFullYear() % 100 !== 0) ||
        new Date().getFullYear() % 400 === 0;

      numberOfDays = isLeapYear ? 29 : 28;
      break;
    default:
      numberOfDays = -1;
  }

  if (numberOfDays !== -1) {
    console.log(numberOfDays);
  }
}

/* END */
/* 16 */
var alphabet = prompt("Enter a single alphabet:");

var lowerAlphabet = alphabet;

switch (lowerAlphabet) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    console.log(alphabet);
    break;
  default:
    console.log(alphabet);
}

/* END */
/* 17 */
var num1 = parseInt(prompt("Enter the first number:"));
var num2 = parseInt(prompt("Enter the second number:"));

switch (true) {
  case num1 > num2:
    result = num1;
    break;
  case num2 > num1:
    result = num2;
    break;
  default:
    result = "Both numbers are equal";
}

console.log(result);

/* END */
/* 18 */
var userNumber = parseInt(prompt("Enter a number:"));
var result;

switch (userNumber % 2) {
  case 0:
    result = "Even";
    break;
  case 1:
    result = "Odd";
    break;
  default:
    result = "Invalid input";
}

console.log(userNumber + " is " + result);

/* END */
/* 19 */
var userNumber = parseInt(prompt("Enter a number:"));

switch (userNumber) {
  case 1:
    result = "Positive";
    break;
  case -1:
    result = "Negative";
    break;
  case 0:
    result = "Zero";
    break;
  default:
    result = "Invalid input";
}
console.log(result);

/* END */

/* ! 20 */
var num1 = parseInt(prompt("Enter the first number:"));
var operation = prompt("Enter the operation (+, -, *, /):");
var num2 = parseInt(prompt("Enter the second number:"));
switch (operation) {
  case "+":
    result = num1 + num2;
    break;
  case "-":
    result = num1 - num2;
    break;
  case "*":
    result = num1 * num2;
    break;
  case "/":
    if (num2 !== 0) {
      result = num1 / num2;
    }
}

console.log(result);
/* END */
