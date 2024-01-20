let age = prompt("Сколько вам лет?");
let checkAge = (age > 18) ? true : confirm('Родители разрешили?');


function pow (x, n) {
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *=x;
    }
    return result;
}

console.log(pow(1, 100));


function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Вы согласны?",
    () => { alert("Вы согласились."); },
    () => { alert("Вы отменили выполнение."); }
);


let arr = [5, 2, 1, -10, 8];
arr.sort((a, b) => b - a);
alert(arr);


let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(item => item.name);

alert( names ); 


let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map(item => {
    return {
        fullName: `${item.name} ${item.surname}`,
        id: item.id,
    }
});

alert( usersMapped[0].id ) 
alert( usersMapped[0].fullName ) 


function getAverageAge(users) {
    let sumOfAge = 0;
    for(let i = 0; i < users.length; i++) {
        sumOfAge += users{i}.age;
    }
    return sumOfAge / users.length;
}
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

alert( getAverageAge(arr) ); 