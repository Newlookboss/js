

//* 1 задание

const yodaSays = ["on JavaScript", "programming ", "I like "];

console.log (yodaSays.reverse().join(""));

//* 2 задание

const duck = { name: "Donald", color: "white", age: "1" };

console.log ("The duck's name is" + " " + duck.name + "." + 
"\n" + duck.name + " is " + duck.age + " years old and is " + duck.color + " in color." + 
"\n" + duck.name + " is a young duck.");




//* 3 задание

let username = prompt("Username: ");

if (!username) {
    alert("Login canceled");
} else if (username === "admin") {
    let password = prompt("Password: ");
    if (!password) {
        alert("Login canceled");
    } else if (password === "BlackOverlord") {
        alert("Welcome!");
    } else {
        alert("Wrong password!");
    }
} else {
    alert("Unknown user");
};

//* 4 задание

let milkbeer = ["milk", "beer", "beer", "milk", "milk"];

for (let i = 0; i < milkbeer.length; i++) {
    if (milkbeer[i] === "milk") {
        console.log("good");
    } else {
        console.log("bad");
    }
}

//* 5 задание

let meaning = prompt("Rectangle: ");
let rectangle = "";

for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 20; j++) {
        rectangle += meaning;
    }
    rectangle += "\n";
}

alert(rectangle);

// //* 6 задание

let seconds = prompt("Введите количество секунд: ");
let hours = Math.floor(seconds / 3600);

if (hours > 1) {
	alert("Осталось " + hours + " часов.");
} else if (hours === 1) {
	alert("Осталось " + hours + " час.");
} else if (seconds >= 60) {
	alert("Осталось менее часа");
} else {
	alert("Рабочий день окончен");
}

//* 7 задание

let num1 = Math.floor(Math.random() * 9) + 1;
let num2 = Math.floor(Math.random() * 9) + 1;
let answer = num1 * num2;
let userAnswer = prompt("What is " + num1 + " * " + num2 + " = ? ");

if (userAnswer == answer) {
	alert("You are correct!");
} else if (userAnswer === "" || userAnswer === null) {
	alert("You are wrong");
} else {
	alert("You are wrong");
}








