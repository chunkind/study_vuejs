let arr = [10, 20, 30, 40];
let [a1, a2, a3] = arr;
console.log(a1, a2, a3);

let p1 = { name: "홍길동", age: 20, gender: "M" };
let { name: n, age: a, gender } = p1;
console.log(n, a, gender);
//console.log(name, age, gender); //이건 에러가 발생.

var obj = { name : "최민재", back : [ {'돈':'1000'},{'필통':'연필'} ] }
const {back} = obj
const {name} = obj
const back2 = obj; //객체는 이렇게 접근해야함
console.log(back);
console.log(back2);
console.log(name);