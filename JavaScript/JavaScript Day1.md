# WEB2 JavaScript

- - - 

## 1. 수업의 목적

+ 문법을 배우는 것이 아닌, 기능 구현을 위한 문법을 알려 줌.
	+ 실습 위주 (문법은 부가적)

+ 검사-element : 태그를 의미.

+ ```<input type = "button" value= "night" onclick = 
	"document.querySelector('body').style.backgroundColor = 'black';
	"document.querySelector('body').style.color = 'white';

	">```
	+ input 태그: 버튼 만듦 
	+ input 속성(type): button을 주어야 함 
	+ input value: 버튼의 이름 
	+ onclick : 속성으로 JS가 붙음. (버튼 클릭시 JS코드가 실행됨.)
	+ document.querySelector('body') : 문서에서 body태그를 선택
	+ .style ~ 'black' : 스타일 속성 값으로 bg를 black으로 한다.

+ JS코드에 따라 body의 디자인이 바뀐다.
	+html 혼자서는 변화할 수 없지만, JS코드로 사용자와 상호작용하여 변화할 수 있다.


- - -

## 2. HTML과 JS의 만남 1 (script 태그)

+ `<script> </script>` : html태그로 이 안에 js코드가 들어온 다는 것을 알림

+ `document.write('hello world');`

+ script 의 write와 html의 일반 출력과의 차이
	+script, 1+1은 2로 뜸 (동적)
	+html, 1+1은 1+1로 뜸 (정적)

 - - -
https://www.youtube.com/watch?v=wcsVjmHrUQg

## 3. HTML과 JS의 만남 2 (이벤트)

+ onclick= "alert('hi')" : (alret : 경고 기능)hi를 출력

+ 웹 브라우저 위에서 일어나는 일들 : Event
	+ click
	+ 입력한 text 내용이 변했을 때(onchange) 키보드를 눌렀을 때(onkeydown)등등
	+ on~~

## 4. HTML과 JS의 만남 3 (콘솔)

+ 검사-Console - `alert('문자열'.length)` : 문자열의 크기가 뜬다.
+ 검사창에서 esc 누르면 검사창과 함께 콘솔이 밑에 뜬다.

+ 이미 있는 웹사이트에서도, 내가 코드를 콘솔창에 작성하여 해결할 수 있다.

