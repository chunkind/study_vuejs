# 1.기본 디렉티브
## 1) v-text, {{}} (단방향 디렉티브)
innerText 속성에 연결됨, 태그 문자열을 HTML 인코딩하여 나타내기 때문에 화면에는 태그 문자열이 그대로 나타냄.

## 2) v-html (단방향 디렉티브)
innerHTML 속성에 연결됨, 태그 문자열을 파싱하여 화면에 나타냄. 태그 그대로 나타내기 때문에 XSS(Cross Site Scripting) 공격에 취약하다.

## 3) v-bind (단방향 디렉티브)
요소의 콘텐트영역을 설정하는 것이 아닌 요소 객체의 속성들을 바인딩하기 위해 사용
v-bind:src 를 :src와 같이 생략 가능

## 4) v-model (양방향 디렉티브)
모델객체와 view를 연결하는 양방향 디렉티브

* v-model 디렉티브의 수식어들
lazy : 입력폼에서 이벤트가 발생할 때 입력한 값을 데이터와 동기화. 텍스트 박스에서라면 입력 후 포커스가 이동하거나 할 때 데이터 옵션값이 변경.
ex) <input type="text" v-model.lazy="name">

number : 이 수식어를 지정하면 숫자가 입력될 경우 number타입의 값으로 자동 형변환되어 데이터 옵션값으로 반영된다.

trim : 이 수식어를 지정하면 문자열의 앞뒤 공백을 자동으로 제거.

## 5) v-show, v-if, v-else, v-else-if
v-if는 조건에 맞지 않으면 랜더링 하지 않음
v-show는 랜더링은 하되 display속성을 변경하여 화면에 표시 않함.
---

# 2.반복 렌더링 디렉티브
## 1) v-for
배열 데이터인 경우 : v-for="(contact, index) in contacts"
객체 데이터인 경우 : v-for="(val, key, index) in regions"

* 주의 : v-for 디렉티브가 먼저 수행되고 v-if 디렉티브가 적용된다.(11번 참고)

* key 요소
Vue.js는 가상 DOM(Virtual DOM)을 지원한다. 가상DOM은 렌더링 속도를 빠르게 하기 위해 변경된 부분만을 업데이트한다. vue.js의 가상 DOM은 v-for로 렌더링한 배열 데이터의 순서가 변경되면 DOM 요소(HTML DOM Element)를 이동시키지 않고 기존 DOM 요소의 데이터를 변경 한다. 만일 DOM 요소를 추적하여 DOM 요소의 위치를 직접 변경하고자 한다면, DOM 요소에 key 특성(Attribute)을 부여할 수 있다. v-bind 디렉티브를 이용해 key 특성에 고유한 값을 부여하면 된다. 데이터베이스를 조회하여 얻어낸 결과를 렌더링하는 경우라면 key 특성에 기본키(Primary key) 값을 바인딩하면 된다.

키 특성 부여하기 예)
<tbody id="contacts">
    <template v-for="(contact, index) in contacts">
        <tr :key="contact.no">
            <td>{{contact.no}}</td>
            <td>{{contact.name}}</td>
            <td>{{contact.tel}}</td>
            <td>{{contact.address}}</td>
        </tr>
    </template>
</tbody>

일반적으로 key 특성을 바인딩할 것을 권장하지만 key 특성을 부여한다고 해서 렌더링 속도가 개선된다고 단정지어 말할 수는 없다. DOM의 계층 구조가 단순하거나 v-for 디렉티브로 렌더링 되는 UI가 단순하다면 오히려 실행 속도가 느려질 수 있다.

---

# 3.기타 디렉티브
## 1) v-pre
HTML요소에 대한 컴파일을 수행하지 않는다.
문자 그대로 보여줌 
ex) {{message}}

## 2) v-once
처음 한 번만 렌더링을 수행.
vue 인스턴스의 데이터를 변경하더라도 다시 렌더링을 수행하지 않는다.
초깃값이 주어지면 변경되지 않는 UI를 만들때 사용.

## 3) v-cloak
v-for가 많을때 일시적으로 {{message}} 가 보인다.
이것은 vue 인스턴스가 el 옵션의 템플릿을 컴파일할 때 발생하는 시간 때문에 일어나는 현상인데 v-cloak을 사용하면 화면 초기에 컴파일 되지 않는 템플릿은 나타나지 않도록 할 수 있다.
---