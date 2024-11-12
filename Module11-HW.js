//№1
const randomArr = [1, 2, 3, 0, "hello", null, 4, 5, 6, 0, true, "world", 8];
function countElements(randomArr) {
  let evenCount = 0;
  let oddCount = 0;
  let zeroCount = 0;
  randomArr.forEach((element) => {
    if (typeof element === "number" && !isNaN(element)) {
      if (element === 0) {
        zeroCount++;
      } else if (element % 2 === 0) {
        evenCount++;
      } else {
        oddCount++;
      }
    }
  });
  console.log(`Четных чисел: ${evenCount}`);
  console.log(`Нечетных чисел: ${oddCount}`);
  console.log(`Нулей: ${zeroCount}`);
}
countElements(randomArr);

//№2
function isNum(number) {
  if (number < 1000) {
    console.log(`Данные неверны, число ${number} больше 1000`);
    return;
  }

  if (number <= 1) {
    console.log(`Число ${number} не является простым`);
    return;
  }

  let isPrimeNum = true;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % 2 === 0) {
      isPrimeNum = false;
      break;
    }
  }
  console.log(
    `Число ${number} ${isPrimeNum ? "является" : "не является"} простым`
  );
}
isPrime(0);

//№3
function createAdder(x) {
  return function (y) {
    return x + y;
  };
}
const add = createAdder(5);
console.log(add(3));

//№4
function printNumbers(from, to) {
  if (typeof from !== "number" || typeof to !== "number") {
    console.log("Оба аргумента должны быть числами");
    return;
  }

  if (from > to) {
    console.log("Первое число должно быть меньше или равно второму");
    return;
  }

  let current = from;
  console.log(`Начинаем отсчет от ${from} до ${to}`);
  const timerId = setInterval(() => {
    console.log(current);
    if (current === to) {
      clearInterval(timerId);
      console.log("Отсчет завершен");
    }
    current++;
  }, 1000);
}
printNumbers(5, 15);

//№5
const power = (x, n) => {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
};
