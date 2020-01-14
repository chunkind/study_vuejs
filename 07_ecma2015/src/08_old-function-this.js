function Person(name, yearCount) {
    this.name = name;
    this.age = 0;
    var incrAge = function() {
        this.age++;
    }
    for (var i = 1; i <= yearCount; i++) {
        //--this.age는 0이 출력됨.
        // incrAge();
        //해결책
        //문맥을 넘어서서 this를 연결하려면 bind, apply, call등의 함수 수준의 메서드를 이용해야 한다.
        incrAge.apply(this);
    }

    //해결책 2
    //바깥쪽 영역의 this를 다른 변수에 할당하고 참조하는 방법을 사용할 수도 있다.
    // var outerThis = this;
    // var incrAge = function(){
    //     outerThis.age++;
    // }
    // for(var i=1; i<=yearCount; i++){
    //     incrAge();
    // }
}
var p1 = new Person("홍길동", 20);
console.log(p1.name + "님의 나이 : " + p1.age);