# 1.ES2015를 사용하기 위한 프로젝트 설정
1) npm init 으로 프로잭트 시작해서 모두 디폴트로 설정한다. 다하면 package.json 파일이 만들어 진다.
2) babel관련 라이브러리 받기
 window) npm install -g babel-cli yarn
 macOS) sudo npm install -g babel-cli yarn

yarn을 설치했다면 yarn을 사용할 것을 권장한다.

yarn add -D babel-cli babel-preset-env babel-preset-stage-2
 또는 
npm install --save-dev babel-cli babel-preset-env babel-preset-stage-2

3) .babelrc 파일을 추가하고 아래와 같이 입력
{
  "presets" : [ "env", "stage-2" ]
}

4) src 폴더 만들고 코드 작성

5) babel src -d build 로 빌드

6) node [경로+파일명] 으로 실행

* babel 구성요소들에 대해
babel-cli는 CLI(Command Line Interface)도구로써 babel 명령어를 명령창 또는 터미널창에 입력하여 실행할 수 있도록 한다. 이도구는 어느 경로에서나 실행할 수 있도록 -g(--global)옵션으로 설치한다.
babel-preset-env는 babel의 가장 최신 표준 스펙의 프리셋을 사용할 수 있도록 한다. 이 프리셋에는 es2015, es2016, es2017의 표준 프리셋을 모두 포함한다. 이 책의 예제에서는 babel-preset-stage-2도 사용한다. stage-3은 표준으로 등록할 후보 기능을 제공한다. 아직 표준은 아닌 상태이다. stage-2는 stage-3을 포함하고 초안 상태로 등록된 기능이다. 아직은 초안 상태이지만 개발 시에 자주 이용하는 전개 연산자(Spread Operator)를 사용하기 위해서 stage-2 프리셋을 사용할 것이다. babel의 프리셋들에 대해 자세히 알고 싶다면 https://babeljs.io/docs/en/babel-preset-stage-2.html을 중심으로 확인해보자.

* npm, yarn 패키저와 package.json 파일에 대해
npm install, yarn add 명령어는 Node.js 패키지(라이브러리)를 설치할 수 있는 명령어이다. 설치 모드는 크게 4가지 이다.
1) npm install [패키지명1][패키지명2] 
 이 명령어는 '로컬 모드'로 설치한다. 로컬 모드는 현재 디렉터리의 node_modules 디렉터리에 패키지를 설치하는 것이다.
2) npm install -g [패키지명1][패키지명2]
 -g 옵션은 패키지를 전역(global)에 설치한다. 전역으로 설치한 패키지는 현재 컴퓨터 내의 모든 프로젝트에서 이용 할 수 있다.
3) npm install --save [패키지명1][패키지명2]
 --save 옵션은 로컬 모드와 유사하지만 현재 프로젝트의 package.json에 의존성(dependencies)으로 기록한다. package.json에 의존성이 기록되어 있으면 다른 컴퓨터에 현재의 프로젝트를 이식할 때 'npm install'명령어로 기록된 의존성 패키지들을 모두 설치할 수 있다.
4) npm install --save-dev [패키지명1][패키지명2]
 --save-dev 옵션은 로컬모드와 유사하지만 현재 프로젝트 package.json에 개발 의존성(devDependencies)으로 기록한다. --save 옵션과 마찬가지로 'npm install' 명령어로 기록된 의존성 패키지들을 모두 설치한다. --save 옵션과 유사해보이지만 개발 의존성 패키지들은 개발시에만 사용된다는 특징이 있다. 운영 버전으로 빌드된 이후에는 사용되지 않는다. 개발 의존성으로 설치된 라이브러리는 npm install 명령어로 설치할 때 --production 옵션을 주면 설치되지 않는다.

 package.json은 현재 작성하고 있는 애플리케이션, 모듈의 의존성 관리를 위해 사용하는 파일이며 JSON 형식을 준수한다. 이 파일에는 현재 프로젝트가 의존하고 있는 다른 프로젝틀글 명시하고 관리할 수 있다. 자세한 내용은 공식 문서를 참조 (https://docs.npmjs.com/files/package.json).
 yarn 패키저는 최근 더 자주 이용되는 패키저이다. npm보다 실행 속도가 더 빨라서 더 자주 이용된다. vue cli는 yarn 패키저가 기본적으로 사용 된다. 

 다음을 npm과 yarn을 비교한 표이다.

|npm init|yarn init| 프로젝트 초기화|
|---|---|---|
|npm install | yarn 또는 yarn install | package.json의 패키지 설치 |
|npm install --save [패키지명] | yarn add[패키지명] | 패키지를 프로젝트 의존성으로 추가 |
|npm install --save-dev [패키지명] | yarn add --dev [패키지명] | 패키지를 프로젝트 개발 의존성 수준으로 추가 |
|npm install --global [패키지명] | yarn global add [패키지명] | 패키지를 전역 수준으로 추가 |
|npm update --save | yarn upgrade | 프로젝트 패키지 업데이트 |
|npm run [스크립트명] | yarn [스크립트명] | package.json의 스크립트 명령 실행 |
|npm uninstall --save | yarn remove [패키지명] | 패키지 삭제 |
|npm cache clean | yarn cache clean | 캐쉬 삭제 |

yarn 패키저에 대한 자세한 사용방법은 http://www.holaxprogramming.com/2017/12/21/node-yarn-tutorials/ 를 참고.

간단하게 트랜스파일 기능을 확인하려면 웹 기반의 Babel Repl 도구를 이용하는 것도 좋다.
https://babeljs.io/repl/

# 2.let과 const
var 키워드는 호이스팅을 한다. 호이스팅이란 실행 컨텍스트가 만들어진 후에 var 키워드가 부여된 변수를 미리 생성하는 것 이다. 이러한 이유로 var 키워드로 변수를 중복 선언해도 오류가 발생하지 않았다. 또한 블록 단위의 스코프를 지원하지 않았다. var 키워드는 함수 단위의 스코프만 지원 한다. {}로 묶여진 블록 내에서 선언한 변수는 별도의 스코프를 만들지 않는다는 것을 의미한다. ES 2015에서는 이러한 문제를 해결하기 위해 let 키워드를 지원한다. 블록 단위의 스코프도 해결 했고, 변수의 중복 선언을 방지할 수 있다.

# 5.화살표 함수(Arrow function)
화살표 함수와 전통적인 함수는 서로 다른 this 값이 바인딩된다는 점이다. 자바스크립트에서 this는 호출하는 문맥에 의해 좌우된다. 문맥을 넘어서서 this를 연결하려면 bind, apply, call 등의 함수 수준의 메서드를 이용해야 한다. 

참고자료
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function

이 메서드들은 직접 this를 연결할 수 있는 기능을 제공 한다.

# 10.모듈
모듈이란 독립성을 가진 재사용 가능한 코드 블록. 여러개의 코드 블록을 각각의 파일로 분리한 후 필요한 모듈들을 조합해 애플리케이션을 개발 할 수 있다. export, import로 사용한다. export할 수 있는 대상은 변수, 함수, 객체, 클래스 등이며 다음가 같이 export할 수 있다.

export let var1 = 1000;
export function add(a,b){
  return a+b;
}

# 11.Promise

# 12.전개 연산자(Spread Operator)
... 연산자를 함수의 인자로 사용하면 가변 파라미터(Rest parameter)라고 부른다. 가변 파라미터는 개별 값을 나열하여 함수의 인자로 전달하면 함수의 내부에서 배열로 사용할 수 있도록 한다. 전개 연산자(Spread Operator)는 가변 파라미터와 사용 방법이 다르다. 배열이나 객체를 ... 연산자와 함께 객체 리터럴, 배열 리터럴 에서 사용하면 분해된 값으로 전달한다. 전개 연산자를 객체, 배열에서 모두 사용하려면 ES2015, ES2016, ES2017 표준 프리셋만으로는 안된다. 현재는 stage-2 프리셋을 사용해야 한다. 향후 ES2018이 확정되면 포함될 것으로 예상된다. stage-2 프리셋까지를 모두 적용하였으므로 즉시 이 문법을 사용할 수 있다.

예제 23번 참조.

더 많은 자료는 아래 링크로
http://hacks.mozilla.or.kr/category/es6-in-depth/                                        