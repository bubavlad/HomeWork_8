
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User (id, name, surname , email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

// let user = new User(123456, 'Brad',
//     'Wilson', '@gmail.com', 10203040);
// console.log(user)

// ================================================

function User22 (name, status, id) {
    this.name = name;
    this.status = status;
    this.id = id;
}

let arr = []

let user1 = new User22 ('Derek', true, 3);
arr.push(user1)

let user2 = new User22 ('David', true, 2);
arr.push(user2)

let user3 = new User22 ('John', false, 4);
arr.push(user3)

let user4 = new User22 ('James', false, 5);
arr.push(user4)

let user5 = new User22 ('Eddie', true, 7);
arr.push(user5)

let user6 = new User22 ('Bob', false, 2);
arr.push(user6)

let user7 = new User22 ('Edward', true, 1);
arr.push(user7)

let user8 = new User22 ('Poll', true, 8);
arr.push(user8)

let user9 = new User22 ('Billie', false, 7);
arr.push(user9)

let user10 = new User22 ('Travis', false, 9);
arr.push(user10)

console.log(arr)

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

console.log(arr.filter((elem) => elem.id % 2 === 0))

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

console.log(arr.sort((a,b) => a.id > b.id ? 1: -1))

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor (id, name, surname , email, phone, order) {
    this.id = id
    this.name = name
    this.surname = surname
    this.email = email
    this.phone = phone
    this.order = order
    }
}

let arr2 = []

let client1 = new Client(100500, 'Vasil', 'Bondarenko', '@gmail', 10202010,
    [{name:'Crocs', price: '145$'}]);
arr2.push(client1)

let client2 = new Client(200500, 'Georgiy', 'Bilyak', '@gmail', 52238124,
    [{name:'Crocs', price: '145$'}, {name:'Crocs', price: '145$'}, {name:'Crocs', price: '145$'}]);
arr2.push(client2)

let client3 = new Client(300600, 'Max', 'Parovoz', '@gmail', 784095493,
    [{name:'Crocs', price: '145$'}, {name:'Crocs', price: '145$'}, {name:'Crocs', price: '145$'}, {name:'Crocs', price: '145$'}, {name:'Crocs', price: '145$'}]);
arr2.push(client3)

let client4 = new Client(400700, 'Andrew', 'Lypenko', '@gmail', 786495834,
    [{name:'Crocs', price: '145$'}, {name:'Crocs', price: '145$'}, {name:'Crocs', price: '145$'}]);
arr2.push(client4)

let client5 = new Client(500800, 'Petro', 'Radchenko', '@gmail', 345283812,
    [{name:'Crocs', price: '145$'}, {name:'Crocs', price: '145$'}]);
arr2.push(client5)

let client6 = new Client(600900, 'Ignat', 'Maskarad', '@gmail', 687439434,
    [{name:'Crocs', price: '145$'}]);
arr2.push(client6)

let client7 = new Client(650950, 'Nikita', 'Myndalyuk', '@gmail', 764958345,
    [{name:'Cards', price:'10$'}, {name:'Crocs', price: '145$'}, {name:'Crocs', price: '145$'}]);
arr2.push(client7)

let client8 = new Client(660960, 'Oleg', 'Maidan', '@gmail', 870545945,
    [{name:'Crocs', price: '145$'}, {name:'Crocs', price: '145$'}]);
arr2.push(client8)

let client9 = new Client(670970, 'Nazar', 'Guk', '@gmail', 6849854954,
    [{name:'Crocs', price: '145$'}, {name:'Crocs', price: '145$'}, {name:'Crocs', price: '145$'}, {name:'Crocs', price: '145$'}, {name:'Crocs', price: '145$'}, {name:'Crocs', price: '145$'}]);
arr2.push(client9)

let client10 = new Client(680980, 'Luka', 'Melnyk', '@gmail', 7046435,
    [{name:'Crocs', price: '145$'}, {name:'Crocs', price: '145$'}, {name:'Crocs', price: '145$'}]);
arr2.push(client10)

console.log(arr2)

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

console.log(arr2.sort((a,b) => a.order.length > b.order.length ? 1 : -1))

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car (model, manufacturer, year, maxSpeed, engine) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engine = engine;
        this.driver = 'Відсутній'

        this.drive = function () {
            console.log(`Їдемо зі швидкістю ${this.maxSpeed} км/год`)
        }
        this.info = function () {
            console.log('Model:', this.model);
            console.log('Manufacturer:', this.manufacturer);
            console.log('Year:', this.year);
            console.log('Max speed:', this.maxSpeed);
            console.log('Engine:', this.engine);
            console.log('Driver:', this.driver );
        }
        this.increaseMaxSpeed = function (newSpeed){
            newSpeed = this.maxSpeed + newSpeed
            console.log(newSpeed)
        }
        this.changeYear = function (newValue) {
            this.year = newValue
            console.log(this.year)
        }
        this.addDriver = function (driver) {
            this.driver = driver;
        }
}
let car = new Car ('Mercedes', 'Germany', 2019, 260, 2.5)
car.drive();
car.info();
car.increaseMaxSpeed(40);
car.changeYear(2020);
car.addDriver({name: 'Dima', age: 26})
car.info()

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car2 {
    constructor (model, manufacturer, year, maxSpeed, engine) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engine = engine;
        this.driver = 'Відсутній'
    }
    drive() {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} км/год`)
    }
    info() {
            console.log('Model:', this.model);
            console.log('Manufacturer:', this.manufacturer);
            console.log('Year:', this.year);
            console.log('Max speed:', this.maxSpeed);
            console.log('Engine:', this.engine);
            console.log('Driver:', this.driver );
    }
    increaseMaxSpeed (newSpeed){
            newSpeed = this.maxSpeed + newSpeed
            console.log(newSpeed)
    }
    changeYear (newValue) {
            this.year = newValue
            console.log(this.year)
    }
    addDriver (driver) {
            this.driver = driver;
    }
}
let car1 = new Car2 ('Mercedes', 'Germany', 2019, 260, 2.5)
car1.drive();
car1.info();
car1.increaseMaxSpeed(40);
car1.changeYear(2020);
car1.addDriver({name: 'Dima', age: 26})
car1.info()

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Popelushka {
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size
    }
}
let arrOfCinderella = []

let cinderella1 = new Popelushka('Alina', 23, 37);
arrOfCinderella.push(cinderella1)
let cinderella2 = new Popelushka('Victory', 25, 35);
arrOfCinderella.push(cinderella2)
let cinderella3 = new Popelushka('Yana', 22, 36);
arrOfCinderella.push(cinderella3)
let cinderella4 = new Popelushka('Sasha', 21, 38);
arrOfCinderella.push(cinderella4)
let cinderella5 = new Popelushka('Milana', 18, 39);
arrOfCinderella.push(cinderella5)
let cinderella6 = new Popelushka('Nika', 19, 39.5);
arrOfCinderella.push(cinderella6)
let cinderella7 = new Popelushka('Diana', 20, 37.5);
arrOfCinderella.push(cinderella7)
let cinderella8 = new Popelushka('Karina', 24, 36.5);
arrOfCinderella.push(cinderella8)
let cinderella9 = new Popelushka('Kristina', 27, 35.5);
arrOfCinderella.push(cinderella9)
let cinderella10 = new Popelushka('Sonya', 29, 38.5);
arrOfCinderella.push(cinderella10)

console.log(arrOfCinderella)

class Prince {
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size
    }
}
const andrew = new Prince('Andrew', 32, 38)

let princeAndCinderella = (prince, arrOfCinderellas) => {
    if (!prince.size) throw new Error('відсутня')
    for (let i = 0; i < arrOfCinderellas.length; i++) {
        if (arrOfCinderellas[i].size === prince.size) {
            return arrOfCinderellas[i]
        }
    }
}
try {
    let foundedCinderella = princeAndCinderella(andrew, arrOfCinderella)
    console.log('Cinderella1:', foundedCinderella)
} catch (e) {
    console.log (e)
}

let princeAndCinderella2 = (prince, arrOfCinderellas) => {
    if (!prince.size) throw new Error('відсутня')
    return arrOfCinderellas.find((elem) => elem.size === prince.size)
}
try {
    let foundedCinderella2 = princeAndCinderella2(andrew, arrOfCinderella)
    console.log('Cinderella2:', foundedCinderella2)
} catch (e) {
    console.log (e)
}
