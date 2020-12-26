# WEB2 CSS Day 2

- - -


## 혁명적 변화

+ 인라인 at Style 속성[HTML] : style="color:red"  
	+ [CSS]`<style> a {} </style>` : 선택자{seloector} 
	+ a : 선언{declaration}
	


+ : In style {text-decoration : none or underline;}

+ 이미지: ![css 용어 정리](https://user-images.githubusercontent.com/71889359/103147519-6c735c00-4799-11eb-85e9-22a664d1d7d1.png)

- - -


## CSS 속성을 스스로 알아내기

+ 검색
	+ h1 {



		font-size :60px;



		text-align : center;



		}

+ Property로 검색할 방법만 알면 1분안에 찾을 수 있다 = 거의 아는 것이나 다름 없다.
	+ CSS {찾고자 하는 기능} property 검색
	

## CSS 선택자 스스로 알아내기
+ 기본 = 검정
+ 방문했던 것들 = 회색
+ 방문 = 빨강

+ 기존에는 인라인을 했어야 했다.
	+  <a class = "saw"> 1.html
		+  .saw{ color:gray;}
	
	*  <a class = "saw active"> 2.html 
		*  .active{ color:gray; }
		* active가 나중에 등장-> 나중에 적용됨.
	
	- <a class = "saw" id = "active"> 2.html
		- #active{ color:gray; }
		+ id > class > tag.		
 		+ 특수한 것일수록 우선순위를 높게 설정