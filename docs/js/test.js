
// ----------------------------khai bao bang let, const
let message = "Hello World"
let number = 1
let array = [1,2,3]
number += 10

const numberConst =10;

console.log(message)
console.log(number)
console.log(array)
// ko nhat thiet phai ;

function print(value){
    console.log(value)
}

print(message)
print(number)

//----------------------------------cau lenh dieu kien
function validateNumber(number){
    if (number >0){
        console.log("Valid Number")
    }
    else{
        console.log("Invalid Number")
    }
}
//false ~ 0 , '', null, undefined, NaN (not a number)
//true ~ else
validateNumber(10)
validateNumber(-1)
validateNumber("abc")

if(0){
    console.log("not run")
}

if(''){
    console.log("not run")
}

if(1){
    console.log("run")
}

if("abc"){
    console.log("run")
}

if([1,2,3]){
    console.log("run")
}

//------------------------------vong lap
let array = [1,2,3]
for (i = 0; i < array.length; i++){
    console.log(array[i])
}

for (let number of array){
    console.log(number)
}
//in ra cac phan tu trong day 


//-----------------phuong trinh bac 2

function equation2(a,b,c){
    if (a == 0){
        if (b == 0){
            if (c== 0){
                console.log("phuong trinh co vo so nghiem")
            }
            else{
                console.log("phong trinh vo nghiem")
            }
        }
        else{
            let x = -c/b
            console.log("phuong trinh co 1 nghiem la ", x)
        }
    }
    else{
        delta = b*b - 4*a*c
        if (delta <0){
            console.log("phuong trinh vo nghiem")
        }
        else if (delta == 0 ){
            x = -b/(2*a)
            console.log("phuong trinh co nghiem kep la ", x)
        }
        else{
            x1 = (-b + Math.sqrt(delta))/(2*a)
            x2 = (-b - Math.sqrt(delta))/(2*a)
            console.log("phuong trinh co 2 nghiem la ", x1, "va ", x2)
        }
    }
}
//luy thua la Math.pow(a,b) ~ a^b
equation2(1,3,2)
equation2(0,2,1)
//co the de equation2 o duoi