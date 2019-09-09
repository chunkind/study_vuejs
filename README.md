# Vue.js Study
---
<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->
<!-- code_chunk_output -->

- [Vue.js Study](#vuejs-study)
  - [0.사전준비](#0사전준비)
    - [1) NPM 이란?](#1-npm-이란)
      - [(1) 버전확인(cmd에서)](#1-버전확인cmd에서)
      - [(2) 설치](#2-설치)
    - [2) CLI 란?](#2-cli-란)
      - [(1) cmd에서 글로벌 설치 명령어 수행](#1-cmd에서-글로벌-설치-명령어-수행)
      - [(2) 글로벌 설치 여부 확인](#2-글로벌-설치-여부-확인)
    - [3) Atom 설치](#3-atom-설치)
      - [(1) 설치](#1-설치)
      - [(2) 유용한 플러그인](#2-유용한-플러그인)
          - [(참고) Setting 메뉴 단축키 `Ctrl + ,(콤마)`](#참고-setting-메뉴-단축키-ctrl-콤마)
    - [4) 개요](#4-개요)
      - [(1) Vue의 구조](#1-vue의-구조)
      - [(2) Vue의 장점](#2-vue의-장점)
      - [(3) Vue의 단점](#3-vue의-단점)
      - [(4) Vue와 JQuery의 사용](#4-vue와-jquery의-사용)
  - [1.기본 템플릿](#1기본-템플릿)
    - [1) 직접 script에 추가](#1-직접-script에-추가)
    - [2) 템플릿 작성(CDN)](#2-템플릿-작성cdn)
  - [2. Hello, world](#2-hello-world)
    - [1) jquery로 Hello, world 어플리케이션](#1-jquery로-hello-world-어플리케이션)
    - [2) 문제](#2-문제)
    - [3) 정답](#3-정답)
  - [3.life cycle](#3life-cycle)
    - [1) 라이프 사이클의 순서 및 종류](#1-라이프-사이클의-순서-및-종류)
    - [2) 문제](#2-문제-1)
    - [3) 정답](#3-정답-1)
  - [4.기본 지시자(directive)](#4기본-지시자directive)
    - [1) v-text, v-html](#1-v-text-v-html)
      - [(1) 문제](#1-문제)
      - [(2) 정답](#2-정답)
    - [2) bind](#2-bind)
      - [(1) 문제](#1-문제-1)
      - [(2) 정답](#2-정답-1)
    - [3) 양방향 바인딩 지시자](#3-양방향-바인딩-지시자)
      - [(1) 문제](#1-문제-2)
      - [(2) 정답](#2-정답-2)
    - [4) if, else if, else](#4-if-else-if-else)
      - [(1) 문제](#1-문제-3)
      - [(2) 정답](#2-정답-3)
    - [5) show](#5-show)
      - [(1)문제](#1문제)
      - [(2)정답](#2정답)
  - [5.iterated directive](#5iterated-directive)
    - [1)array](#1array)
      - [(1) 문제](#1-문제-4)
      - [(2) 정답](#2-정답-4)
    - [2)object](#2object)
      - [(1) 문제](#1-문제-5)
      - [(2) 정답](#2-정답-5)

<!-- /code_chunk_output -->
---
## 0.사전준비
### 1) NPM 이란?
>Node Package Module의 약자로 Node.js에서 사용 가능한 모듈을 패키지화 하여 모아놓은 것. 프론트 쪽 프로잭트 할때 대부분의 모듈은 node.js의 모듈 패키지인 npm을 사용 하는 듯 하다.
#### (1) 버전확인(cmd에서)
C:\Users\ck>node --version
C:\Users\ck>npm --version
#### (2) 설치
https://nodejs.org/ko/

### 2) CLI 란?
>Command Line Interface의 약자로 윈도우의 cmd나 맥의 터미털등의 프로그램에서 실행 가능하게 하는 프로그램을 말한다.

#### (1) cmd에서 글로벌 설치 명령어 수행
```
npm install -g @vue/cli
```
(참고) -g 옵션은 글로벌 설치를 의미합니다. (글로벌 설치일 때는 커맨드를 실행하는 위치 상관없음)
(참고) 글로벌 설치시 `C:\Users\%username%\AppData\Roaming\npm\node_modules` 하위로 설치됩니다.

#### (2) 글로벌 설치 여부 확인
cmd를 열고 아무 위치에서나 `vue ui` 명령어 입력하여 vue 프로젝트 세팅용 브라우저 화면이 표시되는지 확인

### 3) Atom 설치
#### (1) 설치
https://atom.io/ 에서 설치파일 다운로드 및 실행
#### (2) 유용한 플러그인
###### (참고) Setting 메뉴 단축키 `Ctrl + ,(콤마)`

**[테마 설치]**

A. Settings > Install > install Packages에서 Themes로 모드를 변경 후 아래 키워드 검색하여 설치
  * seti-ui
  * atom-material-syntax-dark

B. Settings > Themes > Choose a Theme > UI Theme에서 seti 선택하여 적용

C. Settings > Themes > Choose a Theme > Syntax Theme에서 Atom Material Dark 선택하여 적용

```
(참고) 이 테마는 파일 확장명에 따른 직관적인 아이콘과 색상 등으로 파일의 명확한
구분이 가능하게 해줍니다. (Atom 사용시 추천 테마)
```

**[플러그인 설치]**

A. Settings > Install > 상단 Install Themes에서 Packages로 모드를 변경 후 아래 키워드 검색하여 설치
  * language-vue
  * atom-beautify
  * autoclose-html
  * highlight-selected
  * color-picker
  * javascript-snippets
  * platformio-ide-terminal


### 4) 개요
#### (1) Vue의 구조

```
(참고 이미지) Vue MVVM 개요
```
![Vue MVVM](./imgs/01_mvvm.png)

#### (2) Vue의 장점
A. 빠르고 가볍다.
유사한 포지션의 다른 라이브러리에 비해 압도적으로 가볍고 빠른 퍼포먼스를 보여준다.

B. 배우기 쉽다.
자바스크립트의 문법에 많이 익숙하지 않아도 프로그래밍에 대한 개략적인 지식만 있다면 충분히 배울 수 있을 정도다. (물론 심화되면 ECMA Script 2015 정도의 문법을 알고 있으면 좋고, 자바스크립트로의 특징을 잘 아는 것이 좋습니다)

C. 레거시 프로젝트에도 적용이 '비교적' 쉽다.
일정 모듈만 Vue로 조금씩 바꿔나가는 방식의 적용이 가능하다.

D. .vue 확장자를 사용하면 Template, Script, CSS를 모듈 형식으로 볼 수 있어 편하다. 기존 html에서는 이들이 모두 분리되어 있지만 이것으로 특정 컴포넌트에 들어가는 요소가 무엇인지 좀 더 명확히 알기 쉬워졌다.

E. Vue-CLI 3
기존 Vue-CLI 3가 나오기 전에는 SFC 프로젝트 세팅이 어려운 편이어서 쉽게 추천하기는 어려웠지만, Vue-CLI 3으로 인해 굉장히 쉽게 프로젝트 시작이 가능해졌다.


#### (3) Vue의 단점

A. 구글의 Angular, 페이스북의 React에 비해 후발주자이기 때문에 기존 Angular, React 프로젝트 선점 효과가 크고 해당 프론트 기술에서 발생하는 각종 문제점에 대한 해결방안이 널리 나와있다. 국내의 경우도 React, Angular를 다수의 회사에서 이미 활용 중인 것으로 보인다.

B. 나머지 두 라이브러리는 강력한 인지도를 바탕으로 하는 큰 회사들의 지원이 존재하지만, Vue는 오픈소스 커뮤니티 기반으로 운영되고 있다. 빠른 속도로 Vue가 성장 중인 것은 맞지만 장기적이고 파워풀한 지원 면에서는 뒷심이 부족할 수 있다.

```
(참고문서) Vue.js가 주목받는 이유
```
> https://medium.com/@jeongwooahn/vue-js-%EA%B0%80-%EC%A3%BC%EB%AA%A9%EB%B0%9B%EB%8A%94-%EC%9D%B4%EC%9C%A0-bec3db5a1e7d
```
(참고문서) React인가 Vue인가?
```
> https://joshua1988.github.io/web_dev/vue-or-react/

#### (4) Vue와 JQuery의 사용
A. 여러가지 면에서 차이가 있지만, 가장 두드러지는 차이점은 Vue는 화면 요소를 제어할 때 가상의 DOM을 조작한 후 그것을 실제 DOM에 반영하는 반면, JQuery는 실제 DOM을 직접적으로 조작한다는 점이다. **이로 인해 JQuery를 통해 화면 요소에 변경을 가할 경우 Vue에서는 관측되지 않아 변경사항이 반영되지 않는다.** Vue는 MVVM 모델에 따라 가상 DOM의 데이터를 관측하여 변경사항을 화면에 반영한다.

---
## 1.기본 템플릿
### 1) 직접 script에 추가
> https://kr.vuejs.org/v2/guide/installation.html#%EC%A7%81%EC%A0%91-lt-script-gt-%EC%97%90-%EC%B6%94%EA%B0%80
### 2) 템플릿 작성(CDN)
> https://github.com/chunkind/study_vuejs/blob/master/0_template/0_1_default_template.html

---
## 2. Hello, world
### 1) jquery로 Hello, world 어플리케이션
> https://github.com/chunkind/study_vuejs/blob/master/1_hello_world/1_0_hello_world_jquery_completed.html
### 2) 문제
```
위 jquery 템플릿을 vue.js로 변환 하는 문제
아래 링크 파일을 받아 vue.js로 변환 하기
```
> https://github.com/chunkind/study_vuejs/blob/master/1_hello_world/1_1_hello_world_vue_sample.html
### 3) 정답
> https://github.com/chunkind/study_vuejs/blob/master/1_hello_world/1_2_hello_world_vue_completed.html

---
## 3.life cycle
(참고 이미지) Vue의 라이프 사이클 ![Vue life-cycle](./imgs/02_lifecycle_re.png)

### 1) 라이프 사이클의 순서 및 종류

**(1)beforeCreate**
>new Vue()로 Vue 컴포넌트가 생성되고 나서 가장 처음으로 실행되는 라이프 사이클 단계. 이 단계에서는 Vue 내부의 data, methods 속성 등에 아직 접근할 수 없고, 마찬가지로 DOM에도 접근할 수 없다.

**(2)created**
>beforeCreate 다음으로 실행되는 단계로 data, methods 속성이 정의되어 `this.data`등으로 접근이 가능하기 때문에 보통 AJAX 통신이 여기서 호출되는 경우가 많다. 단, Vue 컴포넌트가 아직 화면에 부착되기 전이기 때문에 template 속성에 정의된 DOM 요소에 접근할 수는 없다.

**(3)beforeMount**
>template 속성에 지정한 마크업 속성이 있는 경우 이를 자바스크립트 render() 함수에 전달하기 전에 사용되는 라이프 사이클이다. 일반적인 경우 로직의 추가 빈도가 낮다.

**(4)mounted**
>화면 요소가 모두 부착되고 나서 호출되는 단계로 template 속성으로 표현된 화면 요소에 접근할 수 있으므로 페이지 로딩 후 기본값 세팅 및 화면 제어를 수행하기 적절한 단계. 다만 해당 컴포넌트가 부착되자마자 호출되기 때문에 하위 컴포넌트나 외부 라이브러리는 아직 완료되지 않은 상태일 수 있다.

**(5)beforeUpdate**
>뷰 인스턴스가 추적/감시하는 데이터가 변경되었을 때 화면 요소를 변경하기 위해 호출되는 단계. 변경 예정인 새 데이터에 접근할 수 있어서 변경 예정 데이터의 값과 관련된 로직을 추가로 넣을 수 있다.

**(6)updated**
>뷰 인스턴스가 추적하는 데이터가 변경되고 나서 화면을 새롭게 그린 후 호출되는 라이프 사이클. 이미 화면까지 변경이 완료된 상태이므로, 이 단계에서 데이터 조작을 시도하면 무한 루프가 발생한다. 화면 요소만 추가로 건드리는게 가능.

**(7)beforeDestroy**
>뷰 인스턴스가 제거되기 직전의 라이프 사이클. 이 단계에서는 아직 인스턴스 내부에 접근 가능하므로 뷰 인스턴스 데이터를 삭제하기 좋은 타이밍.

**(8)destroyed**
>뷰 인스턴스가 제거되고 나서 호출되는 단계. 별도로 사용되지 않음.

### 2) 문제
> https://github.com/chunkind/study_vuejs/blob/master/2_life_cycle/2_2_life_cycle_sample.html
### 3) 정답
> https://github.com/chunkind/study_vuejs/blob/master/2_life_cycle/2_1_life_cycle_completed.html

---
## 4.기본 지시자(directive)
### 1) v-text, v-html
```
이 둘의 차이는 jquery의 $().text(); 와 $().html();의 차이이다.
글자 그대로 사용할 것이냐 태그로 사용할 것인가의 차이이다.
```
#### (1) 문제
>https://github.com/chunkind/study_vuejs/blob/master/3_default_directive/3_1_default_directive_sample.html
#### (2) 정답
>https://github.com/chunkind/study_vuejs/blob/master/3_default_directive/3_1_default_directive_completed.html

<br><br>
### 2) bind
```
v-bind:src ="경로"  or  :src="경로" 둘다 사용 가능.
```
#### (1) 문제
>https://github.com/chunkind/study_vuejs/blob/master/3_default_directive/3_2_bind_directive_sample.html
#### (2) 정답
>https://github.com/chunkind/study_vuejs/blob/master/3_default_directive/3_2_bind_directive_completed.html

<br><br>
### 3) 양방향 바인딩 지시자
>html
```
v-model="message"  or  {{message}}
```
>javascript
```
model = {message:"hello world!"};
```
#### (1) 문제
>https://github.com/chunkind/study_vuejs/blob/master/3_default_directive/3_3_two_way_binding_directive_sample.html
#### (2) 정답
>https://github.com/chunkind/study_vuejs/blob/master/3_default_directive/3_3_two_way_binding_directive_completed.html

<br><br>
### 4) if, else if, else
#### (1) 문제
>https://github.com/chunkind/study_vuejs/blob/master/3_default_directive/3_4_if_else_if_directive_sample.html
#### (2) 정답
>https://github.com/chunkind/study_vuejs/blob/master/3_default_directive/3_4_if_else_if_directive_completed.html

<br><br>
### 5) show
```
v-if 와 v-show의 차이점은?
v-if => 렌더링 안함.
v-show => 렌더링은 하되, display none 시켜버림(화면에만 안보이고 코드는 있음)
```
#### (1)문제
>https://github.com/chunkind/study_vuejs/blob/master/3_default_directive/3_5_show_directive_sample.html
#### (2)정답
>https://github.com/chunkind/study_vuejs/blob/master/3_default_directive/3_5_show_directive_completed.html


---
## 5.iterated directive
### 1)array
#### (1) 문제
>https://github.com/chunkind/study_vuejs/blob/master/4_iterated_directive/4_1_iterate_directive_for_array_sample.html
#### (2) 정답
>https://github.com/chunkind/study_vuejs/blob/master/4_iterated_directive/4_1_iterate_directive_for_array_completed.html
### 2)object
#### (1) 문제
>https://github.com/chunkind/study_vuejs/blob/master/4_iterated_directive/4_2_iterate_directive_for_object_sample.html
#### (2) 정답
>https://github.com/chunkind/study_vuejs/blob/master/4_iterated_directive/4_2_iterate_directive_for_object_completed.html
### 3)array
>https://github.com/chunkind/study_vuejs/blob/master/4_iterated_directive/4_3_iterate_directive_for_array_completed.html
### 4)object
>https://github.com/chunkind/study_vuejs/blob/master/4_iterated_directive/4_4_iterate_directive_for_object_completed.html
