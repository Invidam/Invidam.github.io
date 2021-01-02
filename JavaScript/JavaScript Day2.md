# WEB2 JavaScript

- - - 

## 5. 데이터 타입 - 문자열과 숫자

+ 콘솔창에 1+1를 입력하면 2가 뜬다.
	+ + : 이항 연산자, 산술 연산자

+ 문자열은 "~~" or '~~'로 나타낸다.
	+ str.length : 문자열 길이 출력
		+ length : properties.
	+ str1.indexOf(str2) : str1에서, str2의 시작위치를 출력

+ 문자열과 숫자는 다른 데이터 타입이다.

- - -
## 6. 변수와 대입 연산자

+ x = 1;  : 변수에 대입 연산자로 1을 넣는다.
+ variable , constant	
+ 변수를 왜 쓰는가?
	+ 여러개를 바꾸지 않고 변수만 바꾸면 된다.
+ 변수 선언시 var을 앞에 붙인다. {variable}

- - -


## 7. 웹브라우저 제어

+ 버튼을 누르면 <body> -> <body style="";>로 바뀐다. 
	+ style은 css문법
	+ style 속성을 주기 위해서 속성을 주고자하는 태그(제어할 태그)가 바디태그라는걸 js문법으로 알려주어야 한다.


- - -


## 8. CSS 기초
 
### PASS

- - -

## 9. 제어할 태그 선택하기

+ 버튼 클릭시 어떠한 태그에 어떠한 기능을 적용할 지에 대한 문법을 알아야 한다.
	+ onclick = "~" 에 들어갈 내용.
+ onclick = "(body태그를 대상으로)(특정 기능을 실행)"
	+ body태그를 대상으로 : document.querySelector('body' or .class or # id) [body태그의 주소를 변수로 출력한다는 걸로 이해함.]
	+ 특정 기능을 실행 : (body).style.backgroundColor = 'black';
	+ .style.color = 'white';


## 9. 프로그램, 프로그래밍, 프로그래머

+ JavaScript  : 컴퓨터 언어 컴퓨터 프로그래밍 언어
+ HTML : 컴퓨터 언어 (프로그래밍 언어는 아님)

+ Program의 어원 : 음악회, 음악 연주 순서를 program이라고 함
	+ HTML은 시간의 순서에 따라 작동하지 않아 프로그래밍 언어가 아님
	+ JS는 사용자와 동작하기 위해 시간 순서에 따라 여러 가지가 동작하여 프로그래밍 언어임
		+ 명령어를 시간순으로 배치하여 실행

+ 명령어를 시간순으로 실행하는 것 뿐만이 아닌, 더 커다란 것을 원하게 됨.

## 10. 조건문 예고

+ 토글 : 스위치 on off
+ 문법은 건너뛰고 토글 기능 구현쪽으로 건너뛰기

## 11. 비교 연산자와 Boolean 데이터 타입
+ === 가 == 이다.

- - -
## 12. 조건문 활용

+ if (document.querySelector('#night_day').value === night)
	+ .value가 태그의 밸류를 리턴시킴.
	+ if : 배경 검정 글자 흰색 + value = 'day'
	+ else : 배경 흰색 글자 검정 + value = 'night'