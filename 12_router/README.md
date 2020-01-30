# vue-router 란?
```
SPA(단일 페이지 애플리케이션: Single Page Application)는 하나의 페이지 안에서 데스크톱 애플리케이션과 같은 사용자 경험을 제공해줄 수 있는 애플리케이션을 말한다. SPA는 여러 화면을 하나의 페이지 안에서 제공하면서도 화면을 별도로 로딩하지 않는다. 따라서 화면마다 고유의 식별자를 기반으로 화면을 렌더링해야한다. 고유 식별자로 사용하기에 가장 적절한 정보가 발고 URI(Uniform Resource Identifier)이다. Vue.js 애플리케이션에서 사용자가 요청한 URI 경로에 따라 각각 다른 화면이 렌더링되도록 하려면 직접 코드로 구현해 사용할 수도 있지만 대부분 잘 만들어진 라이브러리를 사용한다. Vue.js에서는 vue-router라는 것을 이요하면 된다. Vue.js의 핵심 요소와 깊이 통합되어 SPA를 손쉽게 만들 수 있도록 도와준다. 제공하는 기능은 다음과 같다.

1) 중첩된 경로, 뷰를 매핑할 수 있다.
2) 컴포넌트 기반의 라우팅을 구현할 수 있다.
3) Vue.js의 전환 효과(Transition)를 적용할 수 있다.
4) 히스토리 모드와 해시 모드를 모두 사용할 수 있다.
5) 쿼리스트링, 파라미터, 와일드 카드를 사용하여 라우팅을 구현할 수 있다.

```
# vue-router 기초

# 동적 라우트 (routertest02)
```
동적 라우트(Dynamic Route) 기능은 일정한 패턴의 URI 경로를 하나의 컴포넌트에 연결하는 방법이다. 특히 URI 경로의 일부에 실행에 필요한 파라미터 값이 포함된 경우에 유용하다.

* 파라미터 값 획득
this.$route.params.no 와 같이 /contacts/:no의 :no위치의 문자열 값을 획득.
* 쿼리스트링 값 획득
this.$route.query.keyword 와 같이 /users?keyword=test keyword위치의 문자열 획득.
```

# 중첩 라우트 (routertest03)
```
애플리케이션을 개발하다보면 여러 컴포넌트가 중첩되는 경우가 많다. 하나의 컴포넌트가 다시 하위 컴포넌트를 포함하는 경우에 라우팅도 중첩이 가능해야 한다. 바로 이 기능이 중첩 라우트(Nested Routes) 이다.
```

# 명명된 라우트 (routertest04)
```
명명된 라우트(Named Routes)는 라우트 정보에 고유한 이름을 부여하는 것이다. 이것을 사용할 경우 URI경로가 아닌 부여된 라우트 이름(Route Name)으로 내비게이션하도록 할 수 있다. 복잡한 URI 경로가 만들어질 때 전체 경로(path)를 입력해야 하지만 명명된 라우트를 사용하면 좀더 간단하게 입력할 수 있다. 또한 URI 경로가 변경되더라도 애플리케이션에서의 내비게이션 정보는 바뀌지 않는다.
```
1.라우트 객체에 name 속성 추가
2.name을 이용하는 router-link 태그에 v-bind:to="{name:'home'}" 과 같이 요소 추가. 요소에 query:{pageno:2}나 params:{no:1003}과 같이 전달 가능.

# 프로그래밍 방식의 라우팅 제어 (routertest05)
## 라우터 객체의 push 메서드
<router-link>를 이용해 선언적으로 내비게이션하는 방법 이외에 프로그래밍 방식으로 내비게이션할 수도 있다. 예를 들어 링크를 클릭하면 바로 이동하는 것이 아니라 사용자의 확인을 받고 이동하는 케이스나 이벤트 처리를 이용해 이동하기 전에 다른 작업을 함께 수행하는 경우를 생각해볼 수 있다. 이때 사용하는 메서드가 router 객체의 push 메서드이다. Vue 인스턴스에서는 this.$router.push()와 같이 this.$router 객체를 이용한다. 사용 방법은 다음과 같다.

push(location [, completeCallback] [, abortCallback])

location은 이동하고자 하는 경로 정보이며, 필수 항목이다. completeCallback은 내비게이션이 완료되었을 때 호출되는 콜백 함수이다. abourtCallback은 내비게이션이 취소되었을 때의 콜백 함수이다. 두콜백 함수는 필수 항목이 아니므로 필요하지 않다면 생략할수 있다.

* 사용법
1) 문자열 직접 전달
this.$router.push('/home')

2) 객체 정보로 전달
this.$router.push({path:'/about'})

3) 명명된 라우트 사용
this.$router.push({name:'contacts', params:{no:1002}})

4) 쿼리 문자열 전달 ex) /contacts?pageno=1&pagesize=5
this.$router.push({path:'/contacts', query:{pageno:1, pagesize:5}})

## 내비게이션 보호
프로그래밍 방식으로 라우팅을 제어하는 방법으로 내비게이션 보호(Navigation Guards)기능이 있다. 이 기능은 다른 경로로 리다이렉션하거나 내비게이션을 취소하여 애플리케이션의 내비게이션을 보호하는 데 사용 한다. 내비게이션 보호 기능은 전역 수준, 라우트 정보 수준, 컴포넌트 수준에서 사용할 수 있다.

# 라우팅 모드

# 라우트 정보를 속성으로 연결하기

# 연락처 애플리케이션에 라우팅 기능 적용

# 지연 시간에 대한 처리 
