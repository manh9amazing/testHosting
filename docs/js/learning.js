//1.boolean
// false ~ null, undefined, NaN, 0, "", false
// a = {apple:red, ruler: white} --> a.bag = undefined
// x = document.getElementById("xxx") --> ko co id xxx --> null


//2.string
// cac dau khoi tao cua string '', "", ``
// dau `` co the xuong dong
// let name = "Manh"
// // kha nang long ghep cua ``:   let hello= `hello ${name}`
// // ''. de xem cac chuc nang cua string
// console.log(name.charAt(3))
// console.log(name.endsWith("ss"))//startsWith
// console.log(name.split(","))//cat chuoi bang dau phay
// console.log(name.toLowerCase())//toUpperCase de viet hoa
// console.log("     abc    d    ".trim())//xoa dau cach thua o dau va cuoi -->"abc     d"
// console.log(" \t\n    abc    d    ".trim())
// \t tab, \n la xuong dong


//3.number
// //parseInt(), parseFloat() chuyen du lieu ve so, neu ko pahi so la NaN
// console.log(parseInt("10.5"))
// console.log(Math.sqrt(2))
// console.log(Math.pow(5,3))//
// Math.PI //so pi
// Math.asin() de tinh nguoc lai goc
// Math.sin() dung theo goc radian
// Math.ceil // lam tron len 10.5-->11
// Math.floor // lam tron xuong 10.5-->10
// Math.random()//tra ve 1 so tu 0 -->1
// min + ParseInt(Math.random(max-min +1)) den random gia tri tu min-->max ( co the kiem tra lai)


//4.object - class
// //4.1 language class: Date, Error, Object, Array,...
// let date1 = new Date()
// console.log(date1.toISOString())
// console.log(date1.getDate())
// console.log(date1.getMonth())
// let date2 = new Date("1990-01-11")
// console.log(date2.toLocaleString())
// console.log(date2.toLocaleDateString())
// //4.2 OOP vs POP    
// //OOP
// class Human{
//     constructor(name, age){
//         this.name = name
//         this.age = age
//     }
//     speak(){
//         console.log("Human speak")
//     }
// }
// class Student extends Human{
//     learn(){
//         console.log(this.name + " learning...")
//     }
//     //Override
//     speak(){
//         console.log("Student speak")
//     }
// }

// let student1 = new Student("nhu hud", 18)
// student1.learn() //this~student1 >> this.name == student.name == "nhu hud"
// console.log(student1.age)
// //POP
// let student2 = {
//     name: "lol",
//     age: 20,
//     learn(){
//         console.log(this.name + " learning...")
//     }
// }

// function print(number){
//     console.log(number)
// }

// function print(boolean){
//     console.log(boolean)
// }


//5.array
// let array= [1,2,3]
// //push()<>pop(), unshift()<>shift()
// //push : them 1 phan tu o cuoi, pop(): xoa 1 phan tu o cuoi
// //unshift : them 1 phan tu o dau, shift(): xoa 1 phan tu o dau
// //splice(): them/xoa phan tu o vi tri bat ki cua mang
// //duyet mang 
// array.unshift(10)
// //xoa so o vi tri 1
// //splice(a,b,c,d,e)-vi tri a, so phan tu xoa b, cac phan tu thay the c,d,e
// array.splice(1,1)
// //xoa so o vi tri 1 va thay vao vi tri do 6,7,8
// array.splice(1,1,6,7,8)
// for (let number of array){
//     print(number)
// }

// //for tuong dung voi
// array.forEach(print)

// array.forEach(function(value){
//     console.log(value)
// })

// function print(value){
//     console.log(value)
// }
// array = [1,2,3,4,5,6]
// //loc mang: filter
// function isEven(number){
//     return number%2==0
// }
// let evens = array.filter(isEven)
// console.log(evens)
// //bien doi mang map()
// let newArray = array.map(function(number){
//     return number*2
// })
// console.log(newArray)
// //tim kiem trong mang theo ham dieu kien: find(), findIndex(), lastIndexOf()
// array = [1,2,3,4]
// //tra ra gia tri dau tien thoa man
// let evenFound = array.find(function(number){
//     return number%2==0
// })
// //find-->findIndex tra ra so thu tu cua phan tu trong mang
// console.log(evenFound)

// //tim kiem trong mang theo gia tri: indexOf(), lastIndexOf(), includes()
// array = [1,2,3,4,2]
// //tra so thu tu cua so dau tien bang 2
// //tinh tu dau mang
// let indexOf = array.indexOf(2)
// //tinh tu cuoi mang 
// let lastIndexOf = array.lastIndexOf(2)
// //neu ko tim thay so thoa man se tra ra dap an -1
// //kiem tra xem mang co phan tu cho hay ko, tra ra true, false
// let included = array.includes(3)
// console.log(included)
// //dao nguoc mang: reverse()
// array= [1,2,3]
// let newArray1 = array.reverse()
// console.log(newArray1)
// //LUU Y: array. tren console de tim ham co san

// ERROR LESSON
// let a = 10
// let b = 20

// try{
//     //code nghi ngo bi loi
//     let result = sum(a,b)
//     console.log("SUM a + b" + result)
// }catch(error){
//     //code xu ly loi
//     console.log("error found " + error.message)
// }

// console.log("I'm here to execute")

//Error <-- ReferenceError (ke thua tu Error)

// let a = -1
// try{
//     if(a<0){
//         throw new Error("a must be greater than 0")
//     }

//     console.log("lul")//ko chay neu code tren bi loi
// }catch(error){
//     console.log(error.message)
// }

// function validateNumber(number){
//     if(number<0){
//         throw new Error("number must be greater than 0")
//     }
//     return number
// }

// try{
//     validateNumber(0)
//     validateNumber(-1)
//     validateNumber(-2)
//     validateNumber(2)
// }catch(error){
//     console.log("Error: " + error.message);
// }

// class ValidateNumber extends Error{

// }

//tat ca lenh trong khoi finally deu dc chay bat ke chuong trinh co loi hay khong

// try{
//     console.log(validateNumber(1))
//     console.log(validateNumber(-2))
//     console.log(validateNumber(0))

// }catch(error){
//     console.log("error:" + error.message)
//     //neu doan code trong catch co loi thi code sau try catch se ko chay dc, chi chay code trong finally
// }
// finally{
//     console.log('last')
// }


// XU LY BAT DONG BO
// VD ve dong bo
// let a = 10
// let b = 3
// console.log(a+b)

// VD bat dong bo
// setTimeout(function(){
//     console.log("job1 : done")
// }, 5000)

// setTimeout(function(){
//     console.log("job2 : done")
// }, 2000)
