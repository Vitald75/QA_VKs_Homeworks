// Task 1.
// Написать функцию, которая найдет и выведет в консоль юзеров, зарегистрированных 09.10.2021 и 10.10.2021). Массив в task1.txt
const users = [
    {
        firstName: 'John',
        lastName: 'Caper',
        phone: '7436676737634',
        registrationDate: '12.10.2021'
    },
    {
        firstName: 'Clark',
        lastName: 'Kent',
        phone: '4346676737634',
        registrationDate: '16.09.2021'
    },
    {
        firstName: 'Tony',
        lastName: 'Stark',
        phone: '7436698337634',
        registrationDate: '11.10.2021'
    },
    {
        firstName: 'Bruce',
        lastName: 'Wayne',
        phone: '1111176737634',
        registrationDate: '09.10.2021'
    },
    {
        firstName: 'Star',
        lastName: 'Lord',
        phone: '7439374737634',
        registrationDate: '10.10.2021'
    },
    {
        firstName: 'Kate',
        lastName: 'Bishop',
        phone: '7436693647634',
        registrationDate: '11.10.2021'
    },
    {
        firstName: 'Jerry',
        lastName: 'James',
        phone: '7409048737634',
        registrationDate: '10.10.2021'
    },
    {
        firstName: 'Jeremy',
        lastName: 'Clarkson',
        phone: '743667600289334',
        registrationDate: '16.10.2020'
    },
    {
        firstName: 'Robert',
        lastName: 'Patrik',
        phone: '7436676730093',
        registrationDate: '10.10.2020'
    },
    {
        firstName: 'Jonny',
        lastName: 'Sins',
        phone: '74923982737634',
        registrationDate: '01.01.2021'
    },
    {
        firstName: 'Andrew',
        lastName: 'Garfield',
        phone: '743667988344',
        registrationDate: '09.10.2019'
    },
    {
        firstName: 'Jane',
        lastName: 'Foster',
        phone: '74368783427634',
        registrationDate: '09.10.2019'
    },
    {
        firstName: 'Rick',
        lastName: 'Smith',
        phone: '700000037634',
        registrationDate: '12.10.2021'
    },
];

users.forEach(el => {
    if ((el.registrationDate == '09.10.2021') || (el.registrationDate == '10.10.2021')) {
        console.log(el);
    }
});



// Task 2*
// Откройте в VSCode task2.json файл. Скопируйте из него JSONку, вставьте в свой код (присвоив в переменную).
// Дан массив объектов. Каждый объект является идентификационной карточкой человека. Нам нужно хранить только уникальные значения в этом массиве. Реализуйте функцию, которая будет выполнять эту работу.
console.log("-----------------------------TASK2*--------------------------------------");
const users2 = [{
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
},
{
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
            "lat": "-68.6102",
            "lng": "-47.0653"
        }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
        "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
    }
},
{
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
            "lat": "-43.9509",
            "lng": "-34.4618"
        }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
    }
},
{
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
            "lat": "-68.6102",
            "lng": "-47.0653"
        }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
        "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
    }
},
{
    "name": "Patricia Lebsack",
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org",
    "address": {
        "street": "Hoeger Mall",
        "suite": "Apt. 692",
        "city": "South Elvis",
        "zipcode": "53919-4257",
        "geo": {
            "lat": "29.4572",
            "lng": "-164.2990"
        }
    },
    "phone": "493-170-9623 x156",
    "website": "kale.biz",
    "company": {
        "name": "Robel-Corkery",
        "catchPhrase": "Multi-tiered zero tolerance productivity",
        "bs": "transition cutting-edge web services"
    }
},
{
    "name": "Chelsey Dietrich",
    "username": "Kamren",
    "email": "Lucio_Hettinger@annie.ca",
    "address": {
        "street": "Skiles Walks",
        "suite": "Suite 351",
        "city": "Roscoeview",
        "zipcode": "33263",
        "geo": {
            "lat": "-31.8129",
            "lng": "62.5342"
        }
    },
    "phone": "(254)954-1289",
    "website": "demarco.info",
    "company": {
        "name": "Keebler LLC",
        "catchPhrase": "User-centric fault-tolerant solution",
        "bs": "revolutionize end-to-end systems"
    }
},
{
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
            "lat": "-68.6102",
            "lng": "-47.0653"
        }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
        "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
    }
},
{
    "name": "Mrs. Dennis Schulist",
    "username": "Leopoldo_Corkery",
    "email": "Karley_Dach@jasper.info",
    "address": {
        "street": "Norberto Crossing",
        "suite": "Apt. 950",
        "city": "South Christy",
        "zipcode": "23505-1337",
        "geo": {
            "lat": "-71.4197",
            "lng": "71.7478"
        }
    },
    "phone": "1-477-935-8478 x6430",
    "website": "ola.org",
    "company": {
        "name": "Considine-Lockman",
        "catchPhrase": "Synchronised bottom-line interface",
        "bs": "e-enable innovative applications"
    }
},
{
    "name": "Kurtis Weissnat",
    "username": "Elwyn.Skiles",
    "email": "Telly.Hoeger@billy.biz",
    "address": {
        "street": "Rex Trail",
        "suite": "Suite 280",
        "city": "Howemouth",
        "zipcode": "58804-1099",
        "geo": {
            "lat": "24.8918",
            "lng": "21.8984"
        }
    },
    "phone": "210.067.6132",
    "website": "elvis.io",
    "company": {
        "name": "Johns Group",
        "catchPhrase": "Configurable multimedia task-force",
        "bs": "generate enterprise e-tailers"
    }
},
{
    "name": "Clementina DuBuque",
    "username": "Moriah.Stanton",
    "email": "Rey.Padberg@karina.biz",
    "address": {
        "street": "Kattie Turnpike",
        "suite": "Suite 198",
        "city": "Lebsackbury",
        "zipcode": "31428-2261",
        "geo": {
            "lat": "-38.2386",
            "lng": "57.2232"
        }
    },
    "phone": "024-648-3804",
    "website": "ambrose.net",
    "company": {
        "name": "Hoeger LLC",
        "catchPhrase": "Centralized empowering task-force",
        "bs": "target end-to-end models"
    }
},
{
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
},
{
    "name": "Nicholas Runolfsdottir V",
    "username": "Maxime_Nienow",
    "email": "Sherwood@rosamond.me",
    "address": {
        "street": "Ellsworth Summit",
        "suite": "Suite 729",
        "city": "Aliyaview",
        "zipcode": "45169",
        "geo": {
            "lat": "-14.3990",
            "lng": "-120.7677"
        }
    },
    "phone": "586.493.6943 x140",
    "website": "jacynthe.com",
    "company": {
        "name": "Abernathy Group",
        "catchPhrase": "Implemented secondary concept",
        "bs": "e-enable extensible e-tailers"
    }
},
{
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
            "lat": "-68.6102",
            "lng": "-47.0653"
        }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
        "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
    }
},
{
    "name": "Glenna Reichert",
    "username": "Delphine",
    "email": "Chaim_McDermott@dana.io",
    "address": {
        "street": "Dayna Park",
        "suite": "Suite 449",
        "city": "Bartholomebury",
        "zipcode": "76495-3109",
        "geo": {
            "lat": "24.6463",
            "lng": "-168.8889"
        }
    },
    "phone": "(775)976-6794 x41206",
    "website": "conrad.com",
    "company": {
        "name": "Yost and Sons",
        "catchPhrase": "Switchable contextually-based project",
        "bs": "aggregate real-time technologies"
    }
},
{
    "name": "Clementina DuBuque",
    "username": "Moriah.Stanton",
    "email": "Rey.Padberg@karina.biz",
    "address": {
        "street": "Kattie Turnpike",
        "suite": "Suite 198",
        "city": "Lebsackbury",
        "zipcode": "31428-2261",
        "geo": {
            "lat": "-38.2386",
            "lng": "57.2232"
        }
    },
    "phone": "024-648-3804",
    "website": "ambrose.net",
    "company": {
        "name": "Hoeger LLC",
        "catchPhrase": "Centralized empowering task-force",
        "bs": "target end-to-end models"
    }
},
{
    "name": "Mrs. Dennis Schulist",
    "username": "Leopoldo_Corkery",
    "email": "Karley_Dach@jasper.info",
    "address": {
        "street": "Norberto Crossing",
        "suite": "Apt. 950",
        "city": "South Christy",
        "zipcode": "23505-1337",
        "geo": {
            "lat": "-71.4197",
            "lng": "71.7478"
        }
    },
    "phone": "1-477-935-8478 x6430",
    "website": "ola.org",
    "company": {
        "name": "Considine-Lockman",
        "catchPhrase": "Synchronised bottom-line interface",
        "bs": "e-enable innovative applications"
    }
}
];

// the first method
let users2String = users2.map(JSON.stringify);
let filteredArrayString = Array.from(new Set(users2String));
let filteredArrayJson = filteredArrayString.map(JSON.parse);
console.log("The size of filtered unique array",filteredArrayJson.length);
// console.log("Фильтрованный массив",filteredArrayJson);


//the second method is using lodash method _isEqual, and required extra libs, that placed in the attachment archive.

// var _ = require('./node_modules/lodash/');
// const filteredArray = [];
// users2.filter((item) => {
//   if (!filteredArray.some((element) => (_.isEqual(item, element)))) {
//     filteredArray.push(item);
//   }
// });

// console.log("The size of filtered unique array",filteredArrayJson.length);
// console.log("Фильтрованный массив",filteredArray);


// Task 2*** Реализуйте считывание из JSONки из файла task2.json с помощью, например, модуля fs. для дальнейшего использования в функции, описанной в задании


const fs = require("fs");
fs.readFile('./task2.json', 'utf8', (err, jsonString) => {
    if (err) {
        console.log("-----------------------------TASK2***---------------------------------");
        console.log("Error reading file from disk:", err)
        return
    }
    try {
        const jsonString = fs.readFileSync('./task2.json', 'utf8')
        const myArrayData = JSON.parse(jsonString)
            
        let stringArr = myArrayData.map(JSON.stringify); // convert array of JSON objects into array of strings
        let uniqueStringArr = stringArr.filter((c, index) => {
             return stringArr.indexOf(c) === index;
         }); // create array with unique strings 
        let resultArr = uniqueStringArr.map(JSON.parse) // convert array of strings into array of JSON objects 
        console.log("-----------------------------TASK2***---------------------------------");
        console.log("The size of main array is", myArrayData.length);
        console.log("The size of filtered array is", resultArr.length);
        // results will be in the console's bottom, because a synchronous mode is used
        
} catch(err) {
        console.log("-----------------------------TASK2***---------------------------------");    
        console.log('Error parsing JSON string:', err)
    }
})

// Task 3**
// В файле task3.txt найдете структуру компании и задания, необходимые выполнить.
// Примечание: ВСЕ задания выполнять не обязательно, если вам люто сложно. Но ПЕРВОЕ - прям надо всем:)

const enterprises = [
    {
      id: 1,
      name: "Предприятие 1",
      departments: [
        {
          id: 2,
          name: "Отдел тестирования",
          employees_count: 10,
        },
        {
          id: 3,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 4,
          name: "Администрация",
          employees_count: 15,
        },
      ]
    },
    {
      id: 5,
      name: "Предприятие 2",
      departments: [
        {
          id: 6,
          name: "Отдел разработки",
          employees_count: 50,
        },
        {
          id: 7,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 8,
          name: "Отдел охраны труда",
          employees_count: 5,
        },
      ]
    },
    {
      id: 9,
      name: "Предприятие 3",
      departments: [
        {
          id: 10,
          name: "Отдел аналитики",
          employees_count: 0,
        },
      ]
    }
  ]
  
//Задания:

// 1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. Для предприятия посчитать сумму всех сотрудников во всех отделах.
//**Пример:**
// Предприятие 1 (45 сотрудников)
// - Отдел тестирования (10 сотрудников)
// - Отдел маркетинга (20 сотрудников)
// - Администрация (15 человек)
// Предприятие 2 (75 сотрудников)
// - Отдел разработки (50 сотрудников)
// - Отдел маркетинга (20 сотрудников)
// - Отдел охраны труда (5 сотрудников)
// Предприятие 3 (нет сотрудников)
// - Отдел аналитики (нет сотрудников)

console.log("-----------------------------TASK3.1**---------------------------------");

enterprises.forEach(element => {
    let count = element.departments.reduce((total, deps) => {
       total +=deps.employees_count;
       return total;
  },0);

      console.log(element.name, "(" + ((count > 0) ? count : "нет")   + " сотрудников)");

    for (let deps of element.departments){
        console.log("- ", deps.name, "(" + (deps.employees_count>0 ? deps.employees_count : "нет") + " сотрудников)");
    }
  }
);

// 2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела и возвращать название предприятия, к которому относится).

// Пример:
// getEnterpriseName(4) // Предприятие 1
// getEnterpriseName("Отдел маркетинга") // Предприятие 2
console.log("-----------------------------TASK3.2**---------------------------------");
const getEnterpriseName = function(department) {
    let isLocated = false; 
    enterprises.forEach(enterprise => {
        for (deps of enterprise.departments) {
            if ((deps.id == department) || (deps.name == department)) {
                console.log(enterprise.name);
                isLocated = true;
            }
        }
            });
    if (!isLocated) { console.log("There isn't such department:", department) }
}

getEnterpriseName(4);
getEnterpriseName("Отдел маркетинга");
getEnterpriseName("не существующий отдел");

// 3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия

// Пример:
// addEnterprise("Название нового предприятия")
console.log("-----------------------------TASK3.3**---------------------------------");

const getMaxId = function (arr) {
    let maxId = 0
    arr.forEach(el => {
        maxId = el.id > maxId ? el.id : maxId;
        for (deps of el.departments) {
            maxId = deps.id > maxId ? deps.id : maxId;        
        }
        });
    return maxId;
} 

const addEnterprise = function(newName) {
    const newEnterprise = {
        id : getMaxId(enterprises) + 1,
        name : newName,
        departments : []
        } 
        enterprises.push(newEnterprise)
}

addEnterprise("Предприятие 4");
//console.log(enterprises);

// 4. Написать функцию, которая будет добавлять отдел в предприятие. В качестве аргумента принимает id предприятия, в которое будет добавлен отдел и название отдела.

// Пример:
// addDepartment(1, "Название нового отдела")

console.log("-----------------------------TASK3.4**---------------------------------");
const addDepartment = function(entId, depName) {
    const newDepartment = {
    id : getMaxId(enterprises) + 1,
    name : depName,
    employees_count : 0
    } 

    for (el of enterprises) {
        if (el.id == entId) {
            el.departments.push(newDepartment)
            console.log("Success");
            console.log(el.departments);
        }
    }
}

addDepartment(1, "Название нового отдела в 1");
addDepartment(9, "Название нового отдела в 3");


// 5. Написать функцию для редактирования названия предприятия. Принимает в качестве аргумента id предприятия и новое имя предприятия.

// Пример:
// editEnterprise(1, "Новое название предприятия")
console.log("-----------------------------TASK3.5**---------------------------------");

const editEnterprise = function(entId, newName) {
    for (el of enterprises) {
        if (el.id == entId) {
            el.name = newName;
            console.log("Success");
            //console.log(enterprises);
        }
    }
}
editEnterprise(1, "новое Предприятие 1");


// 6. Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id отдела и новое имя отдела.

// Пример:
// editDepartment(7, "Новое название отдела")
console.log("-----------------------------TASK3.6**---------------------------------");

const editDepartment = function(depId, newName) {
    for (el of enterprises) {
        for (dep of el.departments) {
            if (dep.id == depId) {
                dep.name = newName;
                console.log("Success");
                console.log(el.departments);
                break;
            }
        }
    }
}
editDepartment(7, "новое название отдела ");


// 7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.

// Пример:
// deleteEnterprise(1)
console.log("-----------------------------TASK3.7**---------------------------------");

const deleteEnterprise = function(entId) {
    for (el of enterprises) {
        if (el.id == entId) {
            enterprises.splice(enterprises.indexOf(el),1); 
            console.log("Success");
            console.log(enterprises);
        }
    }
}
deleteEnterprise(5);


// 8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. Удалить отдел можно только, если в нем нет сотрудников.

// Пример:
// deleteDepartment(3)
console.log("-----------------------------TASK3.8**---------------------------------");

const deleteDepartment = function(depId) {
    for (el of enterprises) {
        for (dep of el.departments) {
            if (dep.id == depId) {
                if (dep.employees_count == 0) {
                el.departments.splice(el.departments.indexOf(dep),1);
                console.log("Success");
                console.log(el.departments);
                }
                else {
                     console.log("Fail, because the", dep.name, "has ", dep.employees_count, "employees.");
                }
                break;
            }
        }
    }
}
deleteDepartment(3);
//deleteDepartment(10);

// 9. Написать функцию для переноса сотрудников между отделами одного предприятия. В качестве аргумента принимает два значения: id отдела, из которого будут переноситься сотрудники и id отдела, в который будут переноситься сотрудники).

// Пример:
// moveEmployees(2, 3)
console.log("-----------------------------TASK3.9**---------------------------------");

const moveEmployees = function(fromDep, toDep) {
    let migrants = 0;
    for (el of enterprises) {
        for (dep of el.departments) {
            if (dep.id == fromDep) {
                migrants = dep.employees_count;
                dep.employees_count = 0;
                break;
            }
        }
    }

    for (el of enterprises) {
        for (dep of el.departments) {
            if (dep.id == toDep) {
                console.log("Success. Employees before", dep.employees_count);
                dep.employees_count += migrants;
                console.log("Success. Employees increased to", dep.employees_count);
                break;
            }
        }
    }
}
moveEmployees(4,10);


// Task 4****

// В файле task4.txt вы найдете разноуровневый массив объектов. Очень похожий на массив из 3го задания, только количество вложенностей может быть не ограничено. 
// Задание: написать функцию: 
// Функция строит древовидный список компании.
// При ее вызове в консоль должен вывестись список подразделений компании с указанием количества сотрудников и с соблюдение вложенности подразделений.

console.log("-----------------------------TASK4****---------------------------------");
const company = [
    {
      id: 1,
      name: "Компания",
      parent: null,
      users_count: 10,
      children: [
        {
          id: 2,
          name: "Отдел тестирования",
          parent: 1,
          users_count: 7,
          children: [
            {
              id: 2,
              name: "Тестирование Web",
              parent: 2,
              users_count: 5,
            },
            {
              id: 3,
              name: "Тестирование Mobile",
              parent: 2,
              users_count: 0,
            },
          ]
        },
        {
          id: 4,
          name: "Отдел маркетинга",
          parent: 1,
          users_count: 30,
        },
        {
          id: 5,
          name: "Администрация",
          parent: 1,
          users_count: 25,
          children: [
            {
              id: 6,
              name: "Бухгалтерия",
              parent: 5,
              users_count: 10,
            },
            {
              id: 7,
              name: "Менеджмент",
              parent: 5,
              users_count: 15,
              children: [
                {
                  id: 8,
                  name: "Подраздел менеджмента 1",
                  parent: 7,
                  users_count: 5,
                },
                {
                  id: 9,
                  name: "Подраздел менеджмента 2",
                  parent: 7,
                  users_count: 10,
                }
              ]
            },
            {
              id: 10,
                 name: "HR",
                parent: 5,
              users_count: 1,
            }
          ]
        },
      ]
    }
  ]
  
 const printCompany = function(arr, pref = "") {
    arr.forEach(element => {
     console.log(pref + " " + element.name);
     if  (Array.isArray(element.children)) {
        printCompany(element.children, pref+"--");
     }
    }
   )
 }
printCompany(company)
