# my-movie

[ReactJS로 영화 웹 서비스 만들기](https://nomadcoders.co/react-for-beginners/lobby) 강의를 학습하며 만드는 영화 웹 서비스 클론 코딩 프로젝트 입니다.



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
