# WEB2 JavaScript Day 4

- - - 

## 19. 파일로 쪼개어 정리정돈 하기
+ `<script></script>`의 내용들을 colors.js로 저장하기.
+ `<script src= "colors.js">로 변경하기

+ colors.js에 있는 파일을 웹페이지를 열 때 다운로드 한다.
	+ 하나의 파일 수정으로 n개의 페이지를 수정 가능하다.
	+ 새로 웹페이지 생성 시 코드 재사용이 가능
	+ 웹서버 입장에서 colors.js 파일까지 다운로드 받아야함 ( 캐쉬 이용 시 비용 절감)

- - -


## 20. 라이브러리와 프레임워크
+ 라이브러리 : 필요한 부품들이 되는 SW가 정리정돈되어있음.

+ 프레임워크 : 만드려는 것을 만들기 위해 필요한 공통적인 것들을 framework가 만들어 놓음.
	+ 우리는 달라지는 것들만 만들면 됨.

+ JS 라이브러리 : jQuery 
	+ CDN : 서버에 파일 보관 -> script.scr로 가져올 수 있게 함.
	+ $('a').css('color',color);
		+ $('a') : jQuery로 모든 a태그를 제어하겠다.
		+ css.('color',color); : css함수를 사용


- - -

## 21. UI vs API
+ app을 만들기 위해 프로그래밍을 할 때, 사용하는 조작 장치 : api {application programming interface}
+ 일반적인 웹페이지 : ui

- - -


## 22. 수업을 마치며

+ 순차적 코드 실행으로 여러 문제를 해결
	+ 막히면 조건문 반복문 함수 객체 라이브러리를 사용해 보기
	+ 그러다가도 막히면 공부,검색 할 것.

+ 태그 삭제, 자식 태그 추가 : document 객체 (그래도 안되면 DOM)
+ 웹 브라우저 제어 : window 객체
+ 리로드 X 정보 업로드 : ajax
+ 리로드 되어도 현재 상태 유지 : cookie
+ 인터넷X 동작 : offline web application
+ 화상통신  앱 : webRTC
+ 음성 인식 및 음성으로 정보 전달 : speech (API)
+ 3차원 그래픽 게임 : webGL
+ 가상현실 : webVR
