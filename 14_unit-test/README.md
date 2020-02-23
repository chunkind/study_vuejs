# 단위 테스트
애플리케이션이 복잡해지면 새로운 기능을 추가하거나 기존 기능을 변경할 때 새로운 오류가 발생할 수 있으며 이러한 문제점을 해결하기 위해 테스트가 필요하다. 하지만 대규모 프로젝트의 경우 신속하고 정확하게 테스트하기가 어렵다. 이러한 이유로 자동화된 테스트를 통해서 코드가 정상적으로 작동한다는 점을 확인할 수 있어야 한다. 자동화된 테스트는 예상되는 동작, 기능을 동적으로 문서화하고 문제가 발생했을 때 즉시 발견할 수 있도록 하는 것이 목적이다.

Vue CLI 도구는 프로젝트 생성시에 Mocha_Chai 또는 Jest 기반의 단위 테스트 기능을 플럭인 형태로 제공한다. 프로젝트 생성시에 기본 프리셋(Default Preset) 대신에 수동 설정으로 지정하고 선택할 수 있으며, 기존 프로젝트는 vue add 명령어로 필요한 구성 요소를 추가할 수 있다.
[Jest 설정]
vue add @vue/unit-jest
[Chai + Mocha]
vue add @vue/unit-mocha

# Chai
메처 함수 기능은 Chai라는 패키지가 제공한다. Chai에 대한 자세한 내용은 http://chaijs.com 참조.

# shallowMount 함수와 mount 함수
shallowMount, mount 함수는 @vue/test-utils 패키지에서 지원하는 함수이다. 두 함수 모두 마운트되고 렌더링된 Vue 컴포넌트를 포함하는 Wrapper 객체를 생성하여 리턴한다. mount()는 전체 Vue 컴포넌트 트리, 즉 자식 컴포넌트까지 포함하여 모두 렌더링하지만 shallowMount()는 자식 컴포넌트를 렌더링하지 않고 직접 마운트된 컴포넌트만 렌더링한다는 차이점이 있다. 컴포넌트를 테스트할 때 자식 컴포넌트 트리가 아닌 현행 컴포넌트만 테스트해야 할 경우가 있으며 이런 경우에 shallowMount() 함수를 사용한다.

# jest 정보
http://jestjs.io/docs/en/expect

test method관련 전역 API에 대한 자세한 내용은 http://jestjs.io/docs/en/api.html 
