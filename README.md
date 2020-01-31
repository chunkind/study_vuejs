# 참고 사이트
## 1)자바스크립트 프레임워크 트렌드 
http://bestof.js.org

## 2)vue와 다른 프레임워크의 비교
>https://kr.vuejs.org/v2/guide/comparison.html

## 3)lodash는 여러 가지 유틸리티 기능을 제공한다
https://lodash.com

# Vue-CLI 설치
>Vue-CLi는 에반 유가 공식적으로 관리하는 커맨드라인 인터페이스 기반의 스캐폴딩(Scaffolding) 도구이다. Command Line Interface의 약자로 윈도우의 cmd나 맥의 터미털등의 프로그램에서 실행 가능하게 하는 프로그램을 말한다. Vue-CLI 3란 vue.js 개발을 위한 커맨드 라인 시스템으로 vue.js core에서 공식으로 제공하는 CLI이다. 애플리케이션 개발에 집중 할 수 있도록 프로젝트의 구성을 도와주는 역할을 한다.

```
방법 1. 
npm install -g @vue/cli

방법 2. yarn과 같이 설치
* yarn이 npm보다 실행속도가 빠르기 때문에 최근에는 yarn을 선호한다.
npm install -g yarn @vue/cli  (Window)
sudo npm install -g yarn @vue/cli  (MacOS)

방법 3. 특정 버전을 받고 싶을때
npm install -g @vue/cli@3.5.1  => 특정 버전을 설치하고 싶을때

방법 4. Vue CLI는 2.x버전일 때는 webpack.browserify와 같은 프로젝트 템플릿을 이용해서 다음과 같은 명령어를 이용해 스캐폴딩 코드를 생성 한다.
vue init webpack myapp
```

(참고) -g 옵션은 글로벌 설치를 의미합니다. (글로벌 설치일 때는 커맨드를 실행하는 위치 상관없음)
(참고) 글로벌 설치시 `C:\Users\%username%\AppData\Roaming\npm\node_modules` 하위로 설치됩니다.

# vue cli로 프로잭트 생성.
```
방법 1. 
vue create [프로잭트명]

방법 2. 
vue ui 명령을 실행하여 웹 기반의 Vue 프로젝트 매니저 화면을 이용해 프로젝트를 생성
```

# 글로벌 설치 여부 확인
cmd를 열고 아무 위치에서나 `vue ui` 명령어 입력하여 vue 프로젝트 세팅용 브라우저 화면이 표시되는지 확인

# NPM 이란?
>Node Package Module의 약자로 Node.js에서 사용 가능한 모듈을 패키지화 하여 모아놓은 것. 프론트 쪽 프로잭트 할때 대부분의 모듈은 node.js의 모듈 패키지인 npm을 사용 하는 듯 하다.
## 1)버전확인(cmd에서)
C:\Users\ck>node --version
C:\Users\ck>npm --version
## 2)설치
https://nodejs.org/ko/

# live-server 설치
Vue.js devtools는 파일 URL로 실행해도 사용할 수 있다. 하지만 코드를 변경하고 재실행하려면 매번 새로 고침을 눌러야 하므로 번거롭다. 이럴 때 live-server라는 도구를 사용하면 핫리로딩(Hot Reloading)이라는 기능을 통해 코드가 변경되어 저장되면 브라우저 화면에 즉시 갱신 되로록 할 수 있다. live-server를 설치하기 위해서 다음의 명령어를 콘솔에서 실행

- 설치 
* npm install -g live-server (Window)
* sudo npm install -g live-server(macOS)
- 실행
live-server

# Vue의 구조

```
(참고 이미지) Vue MVVM 개요
```
![Vue MVVM](./imgs/01_mvvm.png)

# Vue의 장점
A. 빠르고 가볍다.
유사한 포지션의 다른 라이브러리에 비해 압도적으로 가볍고 빠른 퍼포먼스를 보여준다.

B. 배우기 쉽다.
자바스크립트의 문법에 많이 익숙하지 않아도 프로그래밍에 대한 개략적인 지식만 있다면 충분히 배울 수 있을 정도다. (물론 심화되면 ECMA Script 2015 정도의 문법을 알고 있으면 좋고, 자바스크립트로의 특징을 잘 아는 것이 좋습니다)

C. 레거시 프로젝트에도 적용이 '비교적' 쉽다.
일정 모듈만 Vue로 조금씩 바꿔나가는 방식의 적용이 가능하다.

D. .vue 확장자를 사용하면 Template, Script, CSS를 모듈 형식으로 볼 수 있어 편하다. 기존 html에서는 이들이 모두 분리되어 있지만 이것으로 특정 컴포넌트에 들어가는 요소가 무엇인지 좀 더 명확히 알기 쉬워졌다.

E. Vue-CLI 3
기존 Vue-CLI 3가 나오기 전에는 SFC 프로젝트 세팅이 어려운 편이어서 쉽게 추천하기는 어려웠지만, Vue-CLI 3으로 인해 굉장히 쉽게 프로젝트 시작이 가능해졌다.

# Vue의 단점
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
