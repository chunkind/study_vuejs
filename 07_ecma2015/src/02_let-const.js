let msg = "GLOBAL";
console.log(msg);
function outer(a) {
    let msg = "OUTER";
    console.log(msg);
    if (true) {
        let msg = "BLOCK";
        console.log(msg);
    }
}

var msg2 = "GLOBAL";
console.log(msg2);
function outer2(a){
    var msg2 = "OUTER";
    console.log(msg2);
    if(true){
        var msg2 = "BLOCK";
        console.log(msg2);
    }
}

outer();
outer2();