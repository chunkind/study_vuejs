# 뷰의 반응형 시스템에 관한 문서
```
https://kr.vuejs.org/v2/guide/reactivity.html
```

# el, data, computed 옵션
## el
el 옵션은 Vue 인스턴스에 연결할 HTML DOM 요소를 지정한다.
주의할 점은 여러 개 요소에 지정할 수 없다는 것이다.
만약 여러개 요소가 있다면 첫번째 요소가 선택된다.

## 동적으로 el 연결
vm.$mount('#id')와 같이 동적으로 연결할수 있다.
가능하다면 vue인스턴스를 생성할 때 미리 지정할 것을 권장 한다.
vue인스턴스가 html요소와 연결되면 도중에 연결된 요소를 변경할 수 없기 때문이다.

## vue 인스턴스 객체에 data 접근 방법
vm.$data.name 과 같이 vm(뷰객체)에 $data 로 접근한다.

## computed 함수에 접근하는법
vm.sum
vm.$options.computed.sum

# 메서드

# 관찰 속성

# v-cloak 디렉티브

# Vue 인스턴스 라이프 사이클