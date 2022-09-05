# my-movie

## 개요

- TMDB API를 활용하여 영화 정보 검색 사이트를 만드는 토이 프로젝트
- 배포 사이트 : https://dannyp0930.github.io/my-movie/

## 개발 환경

- React@17.0.2
- typescript@4.7.4
- react-router-dom@6.2.2
- styled-component@5.3.3
- gh-pages@3.2.3

## 주요 기능

### Home

![Home](README.assets/Home.gif)

- 캐러셀을 구현하여 동적으로 영화 목록 탐색
- API 요청으로 현재 인기 영화, 최고 평점 영화, 개봉 예정 영화 표시

### Detail

![Detail](README.assets/Detail.png)

- 영화의 기본 정보(제목, 포스터, 출연진 등) 표시
  - 영화 배너 이미지로 배경 표현
  - 평점을 나타내는 도넛 차트 구현
- 영화와 관련된 영상(유튜브) 및 이미지 확인 가능

### Search

![Search](README.assets/Search.gif)

- 네비게이션 바의 검색 버튼을 클릭하여 검색 가능
  - `Enter`키를 눌러 검색된 결과 확인

## 특이 사항

### 직접 구현

- 라이브러리 사용을 최대한으로 줄이고 필요한 기능을 직접 구현
  - 캐러셀
  - 도넛차트
  - 로딩 스피너

### 새로운 기술 학습

- 기존에 사용해 보지 않았던 새로운 기술을 사용
  - styled-component
  - typescript

### 배포

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

- gh-pages를 이용한 깃허브 배포
