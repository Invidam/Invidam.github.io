# WEB1 HTML & InterNet Day4

- - -


## 웹호스팅

+ Github을 이용
+ 웹호스팅 : 웹서버를 빌려주는 서비스. (free static web hosting 검색 후 이용) 

+  visitor	: 주소를 통해 방문
+ my 	: upload file to github.
+ github	: web server 활성화, 주소 제공

- - -




## 웹서버 운영하기 윈도우 (상상속에서~)

### 윈도우에 웹서버 설치
+ Apache를 이용
	+ Install apache in window.
		+ bitnami wamp stack
+ bitnami wamp stack
	+ W : windowA : apache M : mysql P : php
	+ 가장 위 최신버전을 다운로드
	+ apache http server을 허용

+ In app(bitnami manager)
	+ Go to app (화면이 뜨면 설치 완료)
	+ 꺼져있다면 설치한 디렉토리에서 다시 켜야 함.
	+ apache web server가 초록색이어야 켜진 것
	


### 웹서버와 http
 + 127.0.0.1/index.html : index.html이라는 파일을 화면에 출력.
	+ 위치 : htdocs (hypertext documents) 에 있는 index 파일
 + 내 컴퓨터(Web Browser, Web server, index.html)이 다 있음.
	+ 127.0.0.1(ip주소)[웹 브라우저가 설치된 컴퓨터의 특별한 주소]
		1. WB -> WS (index.html을 원함)
		2. htdocs/index.html을 읽어 웹 브라우저에 전송
		3. WB가 해석하여 화면에 표시
	+ htdocs에 작업햇던 파일들을 옮겨준다 (기존 것은 삭제)
	+ 파일 열기와 웹브라우저에서 연 것과의 차이
		+ 화면, 동작은 같지만 경로가 다르다.
 + 파일 열기(file://)
	+ WB -> index.html
 + 주소로 열기(http://  <-- WB WS의 통신규약인 hypertext transfer protocol을 이용함.)
	+ WB -> WS -> index.html -> WB
	+ 다른 컴퓨터로 WB WS가 분리되어도 사용이 가능하다.

### WS와 WB와의 통신

 |Web Browser|<-->|Web Server|
 |-------------------|----------------|------------|
 |127.0.0.1(자기자신의 주소)	||192.168.0.13(WS의 주소)|
 |1.WS의 주소/index.html을 요청		|->	|	|
 |	|	|2.index.html을 읽음	|
 |<-|3. 전송	|<-	|
 |4. 해석하여 화면에 출력	|	|	|

### 수업을 마치며
+ 배웠던 것을 복습하기 위해 배운 내용을 사이트에 기록해보자.
	+For 배움을 효과적으로 하기 위해.
+ 웹을 아름답게 : CSS			
+ 사용자와 상호작용을 원한다면 : JavaScript
+ 백엔드를 위하여 : Php node.js JSP express 등 PHP or JSP