# 1.이벤트 관련 문서
```
https://developer.mozilla.org/ko/docs/Web/Events
https://www.w3schools.com/tags/ref_eventattributes.asp
```

# 2.인라인 이벤트 처리
```
v-on:이벤트명="함수"
ex) v-on:click="balance += parseInt(amount)"

축약하면 아래와 같이 사용할수 있다.

@click="함수"
```

# 3.이벤트 핸들러 메서드
이벤트 처리 함수를 작성하여 처리.
예제 02번 참고.

# 4.이벤트 객체
이벤트 핸들러에서 첫번째 파라미터로 이벤트 객체를 받을 수 있다. 아래는 주요 이벤트 객체의 속성들이다.

## 1)이벤트 객체의 주요 공통 속성
target - 이벤트가 발생한 HTML 요소를 리턴함.
currentTarget - 이벤트리스너가 이벤트를 발생시키는 HTML 요소를 리턴함.
path - 배열값. 이벤트 발생 HTML 요소로부터 document, window 객체로까지 거슬러 올라가는 경로를 나타냄.
bubbles - 현재의 이벤트가 버블링을 일으키는 이벤트인지 여부를 리턴함.
cancelable - 기본 이벤트를 방지할 수 있는지 여부를 리턴함.
defaultPrevented - 기본 이벤트가 방지되었는지 여부를 나타냄.
eventPhase - 이벤트 흐름의 단계를 나타냄.
  1: 포착(CAPTURING_PHASE)
  2: 이벤트 발생(AT_TARGET)
  3: 버블링(BUBBLING_PHASE)
srcElement - IE에서 사용되던 속성으로 target과 동일한 속성.

## 2)키보드 이벤트 관련 속성
altKey - ALT 키가 눌러졌는지 여부를 나타냄
shiftKey - SHIFT 키가 눌러졌는지 여부를 나타냄
ctrlKey - CTRL 키가 눌러졌는지 여부를 나타냄
metakey - 메타키가 눌러졌는지 여부를 나타냄. 윈도우에서는 Window Key, macOS에서는 Command Key이다.
key - 이벤트에 의해 타나나는 키의 값을 리턴함. 대소문자 구분함.
code - 이벤트를 발생시킨 키의 코드값을 리턴함.
  ex)a를 눌렀을 때 "KeyA"를 리턴함.
  ex)Shift 키를 눌렀을 때 "Shift"를 리턴함.
keyCode - 이벤트를 발생시킨 키보드의 고유 키코드
  ex)a,A는 65를 리턴함.(대소문자 구분하지 않음)
charCode - keypress 이벤트가 발생될 때 Unicode 캐릭터 코드를 리턴함.
location - 디바이스에서의 키 위칫값. 일반 키보드는 이 값이 모두 0이므로 이용할 수 없음.

## 3)마우스 이벤트 관련 속성
altkey, shiftKey, ctrlKey, metaKey - 키보드 이벤트 관련 속성 참조
button - 이벤트를 발생시킨 마우스 버튼
  0 : 마우스 왼쪽 버튼
  1 : 마우스 휠
  2 : 마우스 오른쪽 버튼
buttons - 마우스 이벤트가 발생한 후에 눌러져 있는 마우스 버튼의 값을 리턴함. 아래 값의 조합으로 이루어짐
  1 : 마우스 왼쪽 버튼
  2 : 마우스 오른쪽 버튼
  4 : 마우스 휠
  8 : 4번째 마우스 버튼
  16 : 5번째 마우스 버튼
  ex) 마우스의 오른쪽 버튼, 휠을 누르고 있는 상태에서 왼쪽 버튼을 클릭할 경우 이 값은 6을 리턴함
clientX, clientY - 마우스 이벤트가 일어났을 때의 뷰포트(ViewPort) 영역상의 좌표. 이 좌표는 스크롤바를 내리더라도 좌푯값에 영향을 받지 않음.
layerX, layerY - 마우스 이벤트가 발생한 HTML 요소 영역상에서의 좌표(IE이외의 브라우저 사용)
offsetX, offsetY - 마우스 이벤트가 발생한 HTML 요소 영역상에서의 좌표(IE 브라우저 사용)
pageX, pageY - 마우스 이벤트가 일어났을 때의 HTML문서(Document) 영역상의 좌표
screenX, screenY - 마우스 이벤트가 일어났을 때의 모니터 화면(Screen) 영역상의 좌표

## 4)이벤트 객체의 주요 메서드
preventDefault() - 기본 이벤트의 자동 실행을 중지시킴
stopPropagation() - 이벤트의 전파를 막음

# 5.기본 이벤트
```
이벤트를 연결하지 않았음에도 뭔가 실행되는 기능을 가지고 있는 것들 이와 같이 HTML문서나 요소에 어떤 기능을 실행하도록 이미 정의되어 있는 이벤트를 기본 이벤트(Default Event)라고 부른다. 대표적인 기본 이벤트는 아래와 같다.

* <a> 요소를 클릭했을 때 href 특성의 경로로 페이지를 이동시킴.
* 브라우저 화면을 마우스 오른쪽 클릭했을 때 내장 컨텍스트 메뉴(ContextMenu: 과거에는 팝업 메뉴라고 불렀지만 공식적인 명칭은 컨텍스트 메뉴이다)가 나타남.
* <form> 요소 내부의 submit 버튼을 클릭햇을 때 action특성에 지정된 경로로 method 특성에 지정된 방식으로 전송함.
* <input type="text" .../> 요소에 키보드를 누르면 입력한 문자가 텍스트 박스에 나타남.

```

## 1) 컨텍스트메뉴 안뜨게 하는법
v-on:contextmenu.prevent="함수"

# 6.이벤트 전파와 버블링
```
이벤트 처리는 3단계를 거친다.
* 1단계(CAPTURING_PHASE) - 문서 내의 요소에서 이벤트가 발생했을 때 HTML 문서의 밖에서부터 이벤트를 발생시킨 HTML 요소까지 포착해 들어가는 이벤트 포착 단계
* 2단계(RAISING_PHASE : AT_TARGET) - 이벤트를 발생시킨 요소에 다다르면 요소의 이벤트에 연결된 함수를 직접 호출시키는 이벤트 발생 단계
* 3단계(BUBBLING_PHASE) - 이벤트가 발생한 요소로부터 상위 요소로 거슬러 올라가면서 동일한 이벤트를 호출시키는 버블링 단계
일반적으로는 2단계 RAISING, 3단계 BUBBLING_PHASE에서 연결된 이벤트 함수가 호출 된다.
```
예제 04번 참조.
예제 04의 결과값을 정리하면 아래와 같다.
---
||#inner click|#outer click|
|---|---|---|
|eventPhase| 2(AT_TARGET)|3(BUBBLING)|
|current target| #inner| #outter|
|target| #inner| #inner|
---

# 7.이벤트 수식어