# WEB2 CSS Day 2

- - -


## 혁명적 변화

	

+ HTML 태그를 이용하여 색깔 바꾸기
	+ Style 속성 :` {style="color:red"}`
+ CSS를 이용하여 색깔 바꾸기
	+ a : 선택자 {Selector}
	+ `{}` : 선언 {Declaration}
	+ ![css 용어 정리](https://user-images.githubusercontent.com/71889359/103147519-6c735c00-4799-11eb-85e9-22a664d1d7d1.png)

+ CSS, 밑줄 추가 or 제거 기능
	+ `{text-decoration : none or underline;}`
- - -


## CSS 속성을 스스로 알아내기

+ 검색
	
	+ ``` ```

+ Property로 검색할 방법만 알면 1분안에 찾을 수 있다 = 거의 아는 것이나 다름 없다.
	+ CSS {찾고자 하는 기능 ex)가운데 정렬} property 검색
		+ ```h1 {
			font-size : 60px;
			text-align : center;
		}```

- - -

## CSS 선택자 스스로 알아내기
+ 하고자 하는 것
	+ 기본 = 검정
	+ 방문했던 것들 = 회색
	+ 방문 = 빨강

+ 기존에는 일일이 인라인을 했어야 했다.
+ 하지만 CSS에서는 class, id를 이용하여 할 수 있다.
	+  <a class = "saw"> 1.html
		+  .saw{ color:gray;}
	
	*  <a class = "saw active"> 2.html 
		*  .active{ color:gray; }
		* active가 나중에 등장-> 나중에 적용됨.
	
	- <a class = "saw" id = "active"> 2.html
		- #active{ color:gray; }
		+ id > class > tag.		
 		+ 특수한 것일수록 우선순위를 높게 설정