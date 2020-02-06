var test1 = function(a, b) {
    return a + b;
}

let test2 = (a, b) => {
    return a + b;
};

let test3 = (a, b) => a + b;

console.log(test1(1, 1));
console.log(test2(1, 2));
console.log(test3(3, 4));