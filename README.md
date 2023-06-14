## 사용법

### components

- 화면 전체와 해당되지 않고, Header나 Footer, Scroll 이벤트와 관련해서 어떤 애니메이션이 나와야한다거나...

### constants/routeInfo

- 새로운 화면을 만들면(pages 안에) 그 아이를 import
- routes 변수에 `{ path: /^\/[새로만든 page router]$/, element: [새로만든 Page 이름] }` 추가

### Pages

- 새로 만들 화면을 .js 파일로 만들어주시면 됩니다.

### css

- 꾸미고 싶은 화면이나 컴포넌트(components)의 css 파일을 만들고 작성한 다음
- `index.css`에 `@import 'main.css';`

### static

- 정적인 리소스 (폰트나 이미지(svg, png, jpg), lottie animation에 관련된 json)
