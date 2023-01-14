// FOR

// 1.// a soni berilgan.  0 dan a gacha bo'lgan sonlaryig'indisini toping
// va yig'indini konsolga chiqaring. a sonini ham hisobga oling.

var a = 10;
var sum = 0;

function sumOfNumbers(num) {
  for (let i = 1; i <= num; i++) {
    sum = sum + i;
  }

  console.log(sum);
}

sumOfNumbers(a);

// 2.// a soni berilgan. 0 dan a gacha bo'lgan juft
// sonlar yig'indisini toping  va yig'indini konsolga chiqaring

var a = 10;
var sum = 0;

function sumOfevenNumbers(num) {
  for (let i = 0; i <= num; i++) {
    if (i % 2 == 0) {
      sum = sum + i;
    }
  }

  console.log(sum);
}

sumOfevenNumbers(a);

// 3.// a soni berilgan. 0 dan  a gacha bo'lgan toq sonlar yig'indisini toping
//  va yig'indini konsolga chiqaring. a sonini ham inobatga oling.

var a = 10;
var sum = 0;

function sumOfOddNumbers(num) {
  for (let i = 0; i <= num; i++) {
    if (i % 2 !== 0) {
      sum = sum + i;
    }
  }

  console.log(sum);
}

sumOfOddNumbers(a);

// 4.// a soni berilgan. 0 dan a gacha bo'lgan 5 ga bo'linadigan sonlar yig'indisini toping
//  va yig'indini konsolga chiqaring. a sonini ham inobatga oling.

var a = 35;
var sum = 0;

function numberDivisibleByFive(num) {
  for (let i = 0; i <= num; i++) {
    if (i % 5 == 0) {
      sum = sum + i;
    }
  }
  console.log(sum);
}

numberDivisibleByFive(a);

// 5.//a soni berilgan. 0 dan a gacha bo'lgan juft sonlar soni toping
// va konsolga chiqaring. a sonini inobatga olmaymiz.

var a = 10;
var count = 0;

function numberOfEvenNumbers() {
  for (let i = 0; i < a; i++) {
    if (i % 2 == 0) {
      count++;
    }
  }
  console.log(count);
}

numberOfEvenNumbers(a);

// a, b sonlar berilgan.

// 6.// a va b sonlar orasidagi (butun) sonlar   yig'indisini toping
// (a sonini inobatga oling) va yig'indini konsolga chiqaring.
var a = 2,
  b = 8;
var sum = 0;

function aEndBNumbers() {
  for (let i = a; i < b; i++) {
    sum = sum + i;
  }

  console.log(sum);
}

aEndBNumbers(b);

// 7.// a, b sonlar berilgan

// a va b sonlar orasidagi juft sonlarni sonini toping
//  (a sonini inobatga oling) va natijani konsolga chiqaring.

var a = 4,
  b = 15,
  count = 0;

function evenNumber() {
  for (let i = a; i < b; i++) {
    if (i % 2 == 0) {
      count++;
    }
  }
  console.log(count);
}

evenNumber(a);

// 8.// a, b sonlar berilgan.

// a va b sonlar orasidagi 3 ga bo'linadigan sonlarni yig'indisi va sonini konsolga chiqaring.

var a = 4,
  b = 15;
var sum = 0;
var count = 0;

function sumOfNumbersDivisibleByThree() {
  for (let i = a; i < b; i++) {
    if (i % 3 == 0) {
      sum = sum + i;
      count++;
    }
  }

  console.log("yig'indi - " + sum);
  console.log("soni - " + count);
}

sumOfNumbersDivisibleByThree(a);

// 9.// a, b sonlar berilgan.

// a va b sonlar orasidagi 2 va 3 ga bo'linadigan sonlarning sonini  konsolga chiqaring.
var a = 6,
  b = 16;
var count = 0;

function numberOfDigits() {
  for (let i = a; i < b; i++) {
    if (i % 2 == 0 && i % 3 == 0) {
      count++;
    }
  }
  console.log(count);
}

numberOfDigits(a);

// 10.// a, b sonlar berilgan.

//  a va b sonlari orasidagi musbat sonlar sonini toping  va shuni konsolga chiqaring.
//   b sonini ham inobatga oling.

var a = -1,
  b = 10;
var count = 0;

function number() {
  for (let i = a; i < b; i++) {
    if (i >= 0) {
      count++;
    }
  }
  console.log(count);
}

number(a);
