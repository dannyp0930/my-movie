# my-movie

TMDB API를 활용하여 영화 정보 검색 사이트를 만드는 토이 프로젝트

## 개발 환경

- React
  - React-Router-Dom
  - Styled-component

## deploy

```json
// package.json

...

  "scripts": {
	
    ...
    
    "deploy": "gh-pages -d build",
    "predeploy": "npm run build"
  },

	...

  "homepage": "https://{github_ID}.github.io/{repository_name}"

...
```

`package.json`에 다음과 같이 작성해 주면 깃허브 에서 제공해 주는 웹사이트로 배포가 된다. React 앱을 업데이트 할 때 마다 `npm run deploy`를 실행해 주면 된다.
