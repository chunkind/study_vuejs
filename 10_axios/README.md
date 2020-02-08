# axios
서버와 통신하기 위한 라이브러리는 fetch, superagent, axios 등이 있다. Vue.js플러그인으로 개발된 vue-resource라는 것도 있다. 관찰속성을 다루면서 fetch를 사용해봤다. 이 api도 사용할 수 있지만 저수준(low-level)의 api를 지원하므로 범용적으로 사용하기에는 적합하지 않다.

vue.js에서는 vue-resource가 많이 사용될 것 같지만 실상은 그렇지가 않다. vue.js의 창시자인 에반 유는 자신의 글에서 몇가지 이유를 들어 굳이 vue-resource를 사용할 필요는 없다고 설명하고 있다. 대신에 aixos를 사용할 것을 권장하고 있다. axios는 가장 인기 있는 클라이언트 라이브러리이면서, vue-resource가 지원하는 기능 대부분을 제공한다. 또한 범용적이며 취소 기능을 지원 한다.

* 에반 유가 작성한 글은 다음 url 참조
https://medium.com/the-vue-point/retiring-vue-resource-871a82880af4

# http 프록시 설정
브라우저에 기본 설정된 보안 정책 중에 SOP(Same Origin Policy)라는 것이 있다. 이것의 의미는 현재 html문서에 다른 외부 서버와 통신하려는 경우, 즉 현재 브라우저의 오리진과 다른 오리진에 해당하는 서버와 통신하려고 할 때 요청부터 응답 전송까지는 정상적으로 수행되지만 브라우저로 로딩하는 단계에서 오류가 발생하게 된다. 이 문제를 흔히들 "크로스 도메인(Cross Domain)보안 정책으로 인해 크로스 오리진으로부터 데이터를 로드할 수 없는 현상"이라고 말할 수 있다. 한 가지 고려할 것은 도메인명이 같아도 이 문제가 발생할 수 있다는 것이다. 오리진 정보(문자열)가 한 글자라도 다르면 크로스 오리진 상태이다.

이 문제를 해결하기 위한 방법으로 다음과 같은 방법이 있다.

* 컨슈머 서버(Consumer Server)측에 프록시 요소 생성.
* 서비스 제공자(Service Provider) 측에서 CORS(Cross Origin Resource Sharing)기능을 제공.
* 서비스 제공자(Service Provider) 측에서 JSONP(JSON Padding) 기능을 제공.

Vue.js는 컨슈머 서버를 통해 제공되는 프런트엔드 웹 개발 기술이다. 외부 업체가 개발한 서비스를 우리가 개발한 애플리케이션이 이용하는 경우 3가지 문제 해결 방법 중 하나를 선택해야 한다. 외부 업체의 서비스가 CORS나 JSONP와 같은 기법을 제공한다면 프런트엔드 개발자는 아무런 조치를 취하지 않아도 문제없이 서비스를 이용할 수 있다. 하지만 외부 업체의 서비스가 CORS, JSONP등의 기능을 제공하지 않는다면 컨슈머를 거쳐 요청이 전달되도록 해야 한다. Vue CLI가 생성하는 프로젝트 템플릿 코드에서는 약간의 설정 파일만 작성하면 웹팩 개발서버를 이용해 프록시 서버 기능을 곧바로 이용할 수 있다. 프로젝트 최상위 디렉터리에 vue.config.js 파일을 생성하고 다음과 같이 작성하자.

```
module.exports = {
    devServer : {
        proxy : {
            '/api' : {
                target : 'http://localhost:3000',
                changeOrigin : true,
                pathRewrite : {
                    '^/api' : ''
                }
            }
        }ㄴ
    }
}
```

* vue.config.js는 Vue CLI로 생성한 프로젝트에서 웹팩(webpack)에 대한 기본 구성 설정을 추가하거나 변경할 수 있는 기능을 제공하는 파일이다. 이 파일을 이용하면 기본 설정은 vue-cli-service에 내장된 복잡한 설정을 그대로 둔 채로 추가적인 설정을 할 수 있다. vue.config.js를 이용해 설정할 수 있는 내용은 https://cli.vuejs.org/config/ 를 참조.

* contactsvc 는 로컬에서 연락처 api를 돌리게끔 소스코드를 받아 놨다. 현 프로젝트는 CORS를 비활성화시킨 상태이다. 직접 활성화시키려면 서비서 api 소스 코드 중에서 server.js를 열어서 12행의 코드 app.use(cors());의 주석을 제거하면 된다.

CORS에 대한 자세한 내용은 다음 URL을 살펴보자.

https://developer.mozilla.org/ko/docs/Web/HTTP/Access_control_CORS
http://homoefficio.github.io/2015/07/21/Cross-Origin-Resource-Sharing/

# axios 이용 방법
```
[저수준 api]
axios(config)
axios(url, config)

[각 메소드별 별칭]
axios.get(url[, cofig])
axios.delete(url[, config])
axios.post(url[, data[, config]])
axios.put(url[, data[, config]])
axios.head(url[, config])
axios.options(url[, config])
```

# axios 응답 형식
```
* config : 요청 시에 사용된 config 옵션 정보.
* headers : 응답 헤더 정보.
* request : 서버와 통신 시에 사용된 XMLHttpRequest 객체 정보.
* status : HTTP 상태 코드(HTTP Status Code).
    2XX : 성공
    3XX : 리다이렉션
    4XX : 요청 오류(클라이언트 측 오류)
    5XX : 서버 오류
    더 자세한 내용 : https://ko.wikipedia.org/wiki/HTTP_상태_코드
* statusText : 서버 상태를 나타내는 문자열 정보.
```

# axios 요청과 config 옵션
앞의 예제에서는 params 옵션만 사용했었지만 aixos를 요청할 때 다양한 유형의 옵션을 이용할 수 있다. 앞에서 다루지 않은 몇몇 옵션을 소개하겠다.

* baseURL : 이 옵션을 이용해 공통적인 URL의 앞부분을 미리 등록해두면 요청 시 나머지 부분만을 요청 URL로 전달하면 된다. 가능하다면 axios.defaults.baseURL 값을 미리 바꾸는 편이 좋다.
* transformRequest : 요청 데이터를 서버로 전송하기 전에 데이터를 변환하기 위한 함수를 등록한다.
* transformResponse : 응답 데이터를 수신한 직후에 데이터를 변환하기 위한 함수를 등록한다.
* headers : 요청 시에 서버로 전달하고자 하는 HTTP 헤더 정보를 설정한다.

# Vue 인스턴스에서 axios 이용하기
Vue 인스턴스 내부에서 axios를 이용하기 위한 Vue.prototype에 axios를 추가하면 더욱 간단하게 사용할 수 있다. main.js에 
import axios form 'axios'
Vue.prototype.$axios = axios;
를 작성하면 import 하지 않고도 this.$axios를 사용할 수 있다.

# axios 사용 시 주의 사항
axios를 사용하면서 then()를 처리할 때는 ECMAScript6의 화살표 함수(Arrow Function)를 사용할 것을 권장한다. 데이터를 수신한 후에 Vue 인스턴스 내부의 데이터를 변경해야 하는 경우가 많은데, 데이터 옵션을 엑세스하기 위해서는 this 객체가 Vue인스턴스를 참조할 수 있어야 한다. then() 내부에서 화살표 함수를 사용하지 않으면 this.가 Vue인스턴스를 참조하지 않기 때문에 밖에서 별도의 변수에 this를 할당한 후에 클로저(Closure) 방식으로 접근해야 하는 불편함이 발생한다. 이때 then() 내부의 코드를 화살표 함수로 작성하면 바깥 영역의 this를 전달받아 사용할 수 있다.
