var num=90
var result=num%2===0?"even":"odd";
console.log(result)

//spread operator(...)
var arr=[10,20,30];
var arr2=[...arr,40]
console.log(arr)
console.log(arr2)

var marks=[10,20,30,40,50]
var[m1,m2,m3,m4,m5]=marks
console.log(m1,m2,m3,m4,m5)

var arr=[1,24,3,45,7]
var double=arr.map(num=>num*2)
console.log(double)

var odd=arr.filter(num=>num>5)
console.log(odd)

var tot=num.reduce((val,num)=>val+num,0)
console.log(tot)
