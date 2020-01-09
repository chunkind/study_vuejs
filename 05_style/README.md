# 1.스타일 적용
```
스타일 특성은 모두 문자열이며, 케밥 표기법(kebab casing)을 사용한다. HTML에서는 대소문자를 구별하지 않기 때문이다.
일반적으로 <style></style> 태그 안에 서술 하며 중복된 내용은 가장 마지막 줄에 있는 내용이 적용된다.
```

# 2.인라인 스타일
```
v-bind:style로 작성. 데이터 속성을 작성할 때 주의 사항은 스타일 속성을 케밥 표기법(kebab casing)이 아닌 카멜 표기법(camel casing)을 사용해야 한다. 스타일 속성과 속성은 세미콜론(;)이 아닌 콤마(,)로 구분한다.
```
예제 02번 참조

# 3.CSS 클래스 바인딩
```
CSS 클래스를 바인딩하기 위해서 v-bind:class를 사용한다. 이때 개별적인 클래스 단위로 true가 되면 클래스가 주어진다. v-bind:class를 이용해 클래스를 적용할 때는 boolean값을 이용해 지정한다.
```
예제 05번 참조

# 4.계산형 속성, 메서드를 이용한 스타일 적용
스타일에도 계산형 속성을 사용할 수 있다.
계산형속성과 같은 방법으로 메서드를 이용할 수 있다. 메서드가 {[클래스명] : [true/flase]} 형태로 값을 리턴한다면 가능하다.

예제 07번 참조

# 5.컴포넌트에서의 스타일 적용
예제 08번 실행후 아래와 명령어를 적용
vm.boxstyle.boxcolor = false 
# 6.스타일 예제