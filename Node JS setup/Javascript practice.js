// // // // // // // // alert("I am Hari");
// // // // // // // // let x = prompt("Enter the first number");
// // // // // // // // let y = prompt("Enter the first number");

// // // // // // // // let ans = x + y;

// // // // // // // // x>y?document.getElementById("answer").innerHTML += "X is greater":document.getElementById("answer").innerHTML += "y  is greater";
// // // // // // // // document.getElementById("answer").innerHTML += "The sum is " + ans;

// // // // // // // let gender = prompt("Type male if you are mail else type female");

// // // // // // // if(gender === "male")
// // // // // // // {
// // // // // // //     let salary = Number(prompt("Enter your salary"));
// // // // // // //     salary>25000?alert("Salary is greater than " + 25000): alert("Salary is lesser than " + 25000);
// // // // // // // }

// // // // // // // else if(gender === "female")
// // // // // // // {
// // // // // // //     let age = Number(prompt("Enter your age"));
// // // // // // //     age>20?alert("You are legally allowed to marry"):alert("You are not legally allowed to marry");
// // // // // // // }

// // // // // // // let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
// // // // // // // let days = "The days of the weeks are "

// // // // // // // for(let i = 0;  i<week.length; i++)
// // // // // // // {
// // // // // // //     days += week[i] + " ";
// // // // // // // }
// // // // // // // alert(days);

// // // // // // // const x = Number(prompt("Enter the first number"));
// // // // // // // const y = Number(prompt("Enter the Second number"));
// // // // // // // let ans = 0;
// // // // // // // const action = Number(prompt("Enter 1 to add, 2 to subtract, 3 to multiply and 4 to divide"));

// // // // // // // switch(action)
// // // // // // // {
// // // // // // //     case 1:
// // // // // // //         ans = x + y;
// // // // // // //         alert("The answer is " + ans);
// // // // // // //         break;
// // // // // // //     case 2:
// // // // // // //         ans = x - y;
// // // // // // //         alert("The answer is " + ans);
// // // // // // //         break;
// // // // // // //     case 3:
// // // // // // //         ans = x * y;
// // // // // // //         alert("The answer is " + ans);
// // // // // // //         break;
// // // // // // //     case 4:
// // // // // // //         ans = x / y;
// // // // // // //         alert("The answer is " + ans);
// // // // // // //         break;
// // // // // // //     default:
// // // // // // //         alert("Invalid command")
// // // // // // // }

// // // // // // // const returnUpper = (name) =>{return (name.toUpperCase())}
// // // // // // // alert("The name in uppercase is  " + returnUpper("hari shah"));

// // // // // // const x = Number(prompt("Enter the first number"));
// // // // // // const y = Number(prompt("Enter the second number"));
// // // // // // const add = (a, b) =>{return a+b};
// // // // // // let ans = add(x, y);
// // // // // // alert("The sum is " + ans);


// // // // // // const mult = (a, b) =>{return a*b};
// // // // // // ans = mult(x, y);
// // // // // // alert("The multiplication is " + ans);


// // // // // // const person = {
// // // // // //     fname: "Hari",
// // // // // //     lname:"Shah",
// // // // // //     fullname:(fname, lname)=>
// // // // // //     {
// // // // // //         return fname + " " + lname;
// // // // // //     }
// // // // // // }
// // // // // // console.log(person.fullname())


// // // // // let countries = ["United States of America", "Nepal", "Bangladesh"]

// // // // // // function findlongest()
// // // // // // {
// // // // // //     let  index = 0;
// // // // // //     let length = 0;
// // // // // //     for(let i = 0; i<countries.length; i++)
// // // // // //     {
// // // // // //         if(countries[i].length >= length)
// // // // // //         {
// // // // // //             length = countries[i].length;
// // // // // //             index = i;
// // // // // //         }
// // // // // //     }
// // // // // //     alert("The longest name is " + countries[index] + " with length " + length)
// // // // // // }

// // // // // // findlongest();

// // // // // let index  = 0;
// // // // // let l = 0;
// // // // // let longestcountry = countries.map((a)=>{
// // // // //     if(a.length >= l)
// // // // //     {
// // // // //         l = a.length;
// // // // //         return a;
       
// // // // //     }
// // // // // })

// // // // // alert("The longest is " + longestcountry);


// // // // let fooda = ['Noodle', 'Pasta', 'Ice-cream'];
// // // // let foodb = ['Fries', 'Ice-cream', 'Pizza', 'Noodle'];
// // // // let common = []

// // // // fooda.map((a)=>{
// // // //     foodb.map((b)=>{
// // // //         if(a == b && !common.includes(a))
// // // //         {
// // // //             common.push(a)
// // // //         }
// // // //     })


// // // // })

// // // // console.log(common);


// // // let arr = [4, 8, 10 , 14, 18 , 0];

// // // max = Math.max(...arr);
// // // min = Math.min(...arr);
// // // console.log("The max is " + max);
// // // console.log("The min is " + min);

// // const car = {Name: "volo", model: "82X45z2"};
// // const {name, model} = car;
// // console.log(Name);

// // const arr = [4, 6, 8];
// // const [first, second, third] = arr;
// // console.log(first);

// const cars = [{Name:"volvo", color: "Red"}, {Name: "audi", color: "yellow"}];
// const [car1, car2] = cars;
// const {Name, color} = car1;
// console.log("The car name and color is " + Name+  ", " + color);
