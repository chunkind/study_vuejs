# CSS 트랜지션 기초

# 트랜지션 컴포넌트 기초
Vue.js에서는 앞 절에서 살펴보았던 트랜지션 CSS 클래스들을 손쉽게 적용할 수 있도록 트랜지션 래퍼 컴포넌트(transition wrapper component: <transition></transition>)를 지원한다. 모든 요소, 컴포넌트, router-view를 감싸주는 것만으로 효과를 손쉽게 지정할 수 있다. 애미메이션 효과는 트랜지션 래퍼 컴포넌트로 감싸진 요소, 컴포넌트, 라우터뷰가 삭제되거나 추가되거나 변경될 때 발생된다.

# 트랜지션 CSS 클라스
|트랜지션 CSS 클래스|설명|
|---|---|
|v-enter|요소가 나타나기 시작할 때 적용할 클래스|
|v-enter-active|요소가 나타나는 트랜지션이 진행되는 동안 적용할 클래스|
|v-enter-to|요소가 나타나는 트랜지션이 완료될 때 적용할 클래스|
|v-leave|요소가 사라지기 시작할 때 적용할 클래스|
|v-leave-active|요소가 사라지는 트랜지션이 진행되는 동안 적용할 클래스|
|v-leave-to|요소가 사라지는 트랜지션이 완료될 때 적용할 클래스|

        Enter                       Leave
opacity:0 -> opacity:1      Opacity:1 -> opacity:0
 v-enter     v-enter-to      v-leave     v-leave-to
   v-enter-active               v-leave-active
* 트랜지션 CSS 클래스 개념 - https://vuejs.org/v2/guide/transitions.html
* opacity 1:불투명, 0:투명

# velocity 설치
>Velocity.js는 웹사이트의 애니메이션을 지원하는 브라우저에서 실행되는 무료로 사용할수있는 오픈소스 자바스크립트 라이브러리이다. Velocity.js의 문법은 CSS로 작성하던 애니메이션을 쉽게 작성할 수 있도록 디자인되었으며 CSS 기반 애니메이션 효과와 비교해 거의 동일한 수준의 성능을 제공한다. 더 자세한 내용은 http://velocityjs.org/ 를 참조

[패키지 다운로드]
yarn add velocity-animate@1.5.1
또는
npm install --save velocity-animate@1.5.1
[단일 파일 컴포넌트에서 사용]
import Velocity from 'velocity-animate'