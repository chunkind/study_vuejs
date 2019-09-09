# Vue.js Study
---
<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->
<!-- code_chunk_output -->

- [Vue.js Study](#vuejs-study)
  - [1.사전준비](#1사전준비)
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
  - [2.개요](#2개요)
    - [1) Vue 개요](#1-vue-개요)
      - [(1) Vue의 구조](#1-vue의-구조)
      - [(2) Vue의 장점](#2-vue의-장점)
      - [(3) Vue의 단점](#3-vue의-단점)
      - [(4) Vue와 JQuery의 사용](#4-vue와-jquery의-사용)
  - [3.코딩하기](#3코딩하기)
    - [1) 템플릿 작성(직접 script에 추가)](#1-템플릿-작성직접-script에-추가)
    - [2) 템플릿 작성(CDN)](#2-템플릿-작성cdn)

<!-- /code_chunk_output -->
---
## 1.사전준비
### 1) NPM 이란?
Node Package Module의 약자로 Node.js에서 사용 가능한 모듈을 패키지화 하여 모아놓은 것. 프론트 쪽 프로잭트 할때 대부분의 모듈은 node.js의 모듈 패키지인 npm을 사용 하는 듯 하다.
#### (1) 버전확인(cmd에서)
C:\Users\ck>node --version
C:\Users\ck>npm --version
#### (2) 설치
https://nodejs.org/ko/

<br><br>
### 2) CLI 란?
Command Line Interface의 약자로 윈도우의 cmd나 맥의 터미털등의 프로그램에서 실행 가능하게 하는 프로그램을 말한다.

#### (1) cmd에서 글로벌 설치 명령어 수행
```
npm install -g @vue/cli
```
(참고) -g 옵션은 글로벌 설치를 의미합니다. (글로벌 설치일 때는 커맨드를 실행하는 위치 상관없음)
(참고) 글로벌 설치시 `C:\Users\%username%\AppData\Roaming\npm\node_modules` 하위로 설치됩니다.

#### (2) 글로벌 설치 여부 확인
cmd를 열고 아무 위치에서나 `vue ui` 명령어 입력하여 vue 프로젝트 세팅용 브라우저 화면이 표시되는지 확인

<br><br>
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

---
## 2.개요

### 1) Vue 개요

#### (1) Vue의 구조

(참고 이미지) Vue MVVM 개요 ![Vue MVVM](./imgs/01_mvvm.png)

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
https://medium.com/@jeongwooahn/vue-js-%EA%B0%80-%EC%A3%BC%EB%AA%A9%EB%B0%9B%EB%8A%94-%EC%9D%B4%EC%9C%A0-bec3db5a1e7d
(참고문서) React인가 Vue인가?
https://joshua1988.github.io/web_dev/vue-or-react/
```

#### (4) Vue와 JQuery의 사용
A. 여러가지 면에서 차이가 있지만, 가장 두드러지는 차이점은 Vue는 화면 요소를 제어할 때 가상의 DOM을 조작한 후 그것을 실제 DOM에 반영하는 반면, JQuery는 실제 DOM을 직접적으로 조작한다는 점이다. **이로 인해 JQuery를 통해 화면 요소에 변경을 가할 경우 Vue에서는 관측되지 않아 변경사항이 반영되지 않는다.** Vue는 MVVM 모델에 따라 가상 DOM의 데이터를 관측하여 변경사항을 화면에 반영한다.

---
## 3.코딩하기
### 1) 템플릿 작성(직접 script에 추가)
```
https://kr.vuejs.org/v2/guide/installation.html#%EC%A7%81%EC%A0%91-lt-script-gt-%EC%97%90-%EC%B6%94%EA%B0%80
```
### 2) 템플릿 작성(CDN)
