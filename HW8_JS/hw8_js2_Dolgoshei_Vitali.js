// 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1

let result = 1
for (let i = 1; i<=10; i++) {
  result = result * 2;
  console.log("2 в", i, "степени =", result)
}


// 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2
console.log("--------------------TASK1*---------------------------");
const multi2 = function (...rank) {
    rank.forEach(el => {
    let result = 1; 
    for (let i = 1; i<=el; i++) {
        result = result * 2;
    }
    console.log("2 в " + el + " степени = ", result);
    })
}

multi2(10);
multi2(0,2,3,4,5,6,7,8,9,10,11);


// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
// Пример в консоли:
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)
console.log("--------------------TASK2---------------------------");
let str = ":)"
let j = 0
while (j < 5) {
    console.log(str);    
    str = str + ":)";
    j++;
} 

// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
// e.g. function printSmile(stroka, numberOfRows)
console.log("--------------------TASK2*---------------------------");
const printSmile = function (stroka, numberOfRows) {
    let j = 0; 
    let str = stroka;
    while (j < numberOfRows) {
        console.log(str);
        str = str + stroka;
        j++;
    } 
}

printSmile("V",10);
printSmile(":)",5);


// 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
// e.g. function getWordStructure(word)
// В консоли: 
// Слово (word) состоит из  (число) гласных и (число) согласных букв
console.log("--------------------TASK3**---------------------------");
const getWordStructure = function (word) {
    const consonantsArray = ["q","w","r","t","p","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];
    const vovelsArray = ["e","y","u","i","o","a"];
    let vovels = 0;
    let consonants = 0;
    
    for (let i = 0; i <= word.length; i++) {
        if (consonantsArray.includes(word.toLowerCase()[i])) {
            consonants++;
        }
        if (vovelsArray.includes(word.toLowerCase()[i])) {
            vovels++;  }
    }
    console.log("Word - ", word, " consists of ", vovels, " vovels, and ", consonants, " consonants");
}

// Проверки: 'case', 'Case', 'Check-list'
getWordStructure("case");
getWordStructure("Case");
getWordStructure("Check-list");


// 4**. Написать функцию, которая проверяет, является ли слово палиндромом
// e.g. function isPalindrom(word)
// Проверки: 'abba', 'Abba'
console.log("--------------------TASK4**---------------------------");
const isPalindrom = function (word) {
  const wordToCompare1 = word.toLowerCase();
  let wordToCompare2 = "";
  for (let i = wordToCompare1.length; i>0; i--) {
      wordToCompare2 = wordToCompare2 + wordToCompare1[i-1];
  }
  if (wordToCompare1 === wordToCompare2) {
      console.log("Word ", word, " is palindrom");
  } else {
    console.log("Word ", word, " is not palindrom");
  }
}
// Проверки: 'abba', 'Abba'
isPalindrom("abba");
isPalindrom("Abba");
isPalindrom("qWeRtyTREWQ");
isPalindrom("Vitali");