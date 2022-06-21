// 4***:
// Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке

const checkAge3 = function (age) {
    const age_2 = 18;
    const age_3 = 60;
    // age = + age;
    //age = Number(age);
    //alert(age + ' ' + typeof(age));
    if (age && isFinite(age)) {
      if (age < age_2) {
        return (
          "You don’t have access cause your age is " + age + " It’s less then "
        );
      } else {
        if ((age >= age_2) & (age < age_3)) {
          return "Welcome  !";
        } else {
          if (age > age_3) {
            return "Keep calm and look Culture channel";
          } else {
            return "Technical work";
          }
        }
      }
    } else { 
      console.log("invalid input")
      return "Invalid input" }
  };
    
  let result = prompt("Enter your age please:");
  alert (checkAge3(result));
  

