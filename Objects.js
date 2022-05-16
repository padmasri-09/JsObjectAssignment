..................1st Program.............................

var Rectangle = function(width,height) //declaring object with "constructor function"
{
    this.width = width;
    this.height = height;
    this.area = function()
    {
        console.log("Area of the Rectangle is : " +this.width * this.height);
    }
} 

var myRect1 = new Rectangle(2,4); 
var myRect2 = new Rectangle(8,2);
var myRect3 = new Rectangle(2,6);
var myRect4 = new Rectangle(5,4);

console.log(myRect1.width);
console.log(myRect1.height);
myRect1.area();
console.log("---------------------");
console.log(myRect2.width); 
console.log(myRect2.height);
myRect2.area();
console.log("---------------------")
console.log(myRect3.width); 
console.log(myRect3.height);
myRect3.area();
console.log("---------------------")
console.log(myRect4.width);
console.log(myRect4.height);
myRect4.area();
console.log("---------------------")




.......................2nd Program....................................

Rectangle.prototype.getArea = function()
{
    console.log("Getting Area using prototype property : " +this.width * this.height);
}

console.log(Rectangle.prototype);
myRect1.getArea(); 
myRect2.getArea();
myRect3.getArea();
myRect4.getArea();




.........................................3rd Program............................


Rectangle.prototype.getAreaForRect = function(width,height)  //this is because of Global scope and LOcal scope.
{
    console.log("Getting Area using prototype property : " +width * height);
}

console.log(Rectangle.prototype);
myRect1.getAreaForRect(2,3); 
myRect2.getAreaForRect(8,6);
myRect3.getAreaForRect(5,3);
myRect4.getAreaForRect(1,6);


....................................4th Program......................

var obj = {
    firstName : "Sowmi",
    lastName : "Geetha"
};
console.log(obj);


....................5th Program.......................

var ob = {
    firstName : "Padma",
    middleName : "Sri",
    lastName : "Kakumanu"
};
console.log(ob);


.....................6th........................

var myString = new String('4 + 4')
eval(myString.toString());
console.log(eval(myString.toString()));



..............................7th Program................


const myString = '{"firstName":"Padma",  "lastName":"Sri"}';
const ob = JSON.parse(myString);
ob.firstName = eval("(" +ob.firstName+")");


..............................8th Program......................

function Person(firstName,lastName,age,skills,dateOfbirth,address,married,profession)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.skills = skills;
    this.dateOfbirth = dateOfbirth;
    this.address = address;
    this.married = married;
    this.profession = profession;
}

Person1 = new Person("Padma","Sri",99,['java','c#'],"01/01/1998",{city:"Bangalore",pincode:567894},"false","AnalystA4");
Person2 = new Person("Sowmi","Geetha",3,["c++","c#"],"02/02/1998",{city:"Hyderabad",pincode:556778},"false","AnalystA4");

console.log(Person1);
console.log(Person2);

print=function()       
{
    console.log(Person1);
    console.log(Person2);
}();


................................9th Program......................

function Person(firstName,lastName,age,skills,dateOfbirth,address,married,profession)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.skills = skills;
    this.dateOfbirth = dateOfbirth;
    this.address = address;
    this.married = married;
    this.profession = profession;
}
Mahesh = new Person("Mahesh","Srinivas",99,['java','c#'],"01/01/1969",{city:"Bangalore",pincode:454679},"false","AnalystA4");
Tony = new Person("Tony",55,["html","css"],"04/05/1970","false","JrAnalyst");
Arvind = new Person("Arvind",10,"05/08/2009","false","film");

var Tony = Object.create(Mahesh); //inheriting the common properties/storing Mahesh object in Tony
var Aarav = Object.create(Tony);  //it has become Heirarchical inheritance now--> Mahesh is a supermost class 
//var Aarav = Object.create(Mahesh);
print = function()
{
    console.log(Mahesh);
    console.log(Tony.lastName);
    console.log(Tony.address);
    console.log(Arvind.lastName);
    console.log(Arvind.skills);
    console.log(Arvind.address);
    console.log(Arvind.firstName);
};



.......................................10th Program........................

function Account(accountNumber,accountHolderName,accountBalance) 
{
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.accountBalance = accountBalance;
}
function Savings(isSalary,accountNumber,accountHolderName,accountBalance)
{
    this.isSalary = isSalary;
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.accountBalance = accountBalance;
    this.withdraw = function(amount)
    {
        if(this.accountBalance > 0 && this.accountBalance < 100)
        {
            console.log("Insuffient balance! You have less than 100 rs.");
        } 
        if((this.accountBalance >= 100 && this.accountBalance <= 500) && amount === 200)
        {
            this.accountBalance = this.accountBalance - amount;
            console.log("Your money after debiting : " + this.accountBalance);
        }
        if((this.accountBalance > 500 && this.accountBalance <= 5000) && amount === 500 || amount === 2000);
        {
            this.accountBalance = this.accountBalance - amount;
            console.log("Your money after debiting : " + this.accountBalance);
        }
        if((this.accountBalance > 5000) && amount === 200 || amount === 500 || amount ===2000)
        {
            this.accountBalance = this.accountBalance - amount;
            console.log("Your money after debiting : " + this.accountBalance);
        }
        if(this.accountBalance <= 0)
        {
            console.log("ATM says! I can't give money, Please deposit some amount to withdraw later, Now Please go!");
        }
      
    };
    this.getCurrentBalance = function()
    {
        console.log("Your current Account balance is : " + this.accountBalance);
    };
}
function Current(odLimit,accountNumber,accountHolderName,accountBalance)
{
    this.odLimit = odLimit;
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.accountBalance = accountBalance;
    this.withdraw = function(amount)
    {
        if(odLimit > 500)
        {
            if((this.accountBalance > 500 && this.accountBalance < 2000) && amount === 200 || amount === 500)
            {
                this.accountBalance = this.accountBalance - amount;
                console.log("Your balance after debiting the money is : " +this.accountBalance);
            }
            if((this.accountBalance > 2000) && amount=== 200 || amount === 500 || amount === 2000)
            {
                this.accountBalance = this.accountBalance - amount;
                console.log("Your balance after debiting the money is : " +this.accountBalance);
            }
        } 
        else
        {  
            console.log("Your odLimit for Current acocunt is less than 500");
        }  
    };
    this.getCurrentBalance = function()
    {
        console.log("Your current Account balance is : " + this.accountBalance);
    };
       
}

var obj1 = new Account(367898,"Sowmi",675788);
console.log(obj1);
//var Savings = Object.create(Account); //inheriting the common properties
//var Current = Object.create(Account); //inheriting the common properties

var objSavings = new Savings("true",78965,"Valli",589988); //creating Savings object
console.log(objSavings);
console.log(objSavings.withdraw(500));
console.log(objSavings.getCurrentBalance());

var objCurrent = new Current(559,9898877,"Padma",567689); //creating Current object
console.log(objCurrent);
console.log(objCurrent.withdraw(2000));
console.log(objCurrent.getCurrentBalance());
