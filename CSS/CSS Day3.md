# WEB2 CSS Day 3

- - -

## 박스모델
+ `<h1>`, `<a>`를 걸어놀으면 줄바꿈이 되지않는다.
 `<a>`나 `<h1>`의 크기가 정해져있기 때문이다. 그렇다면, 두 태그의 크기를 어떻게 알 수 있을까?



+ Property
	+ border-width: 테두리 두께 조정
	+ border-color: 테두리 컬러 조정
	+ border-style: 테두리 속성 조정(단선{solid}, 점선, 등) 
	+ padding: 컨텐츠와 테두리사이의 간격 조정
	+ margin : 테두리 사이의 간격 조정
	+ display : 디스플레이 속성을 변경 ( inline, block, none[사라짐])
	+ width: 테두리 크기 조정

+ /**/ 주석처리 (In CSS)

+ 디스플레이 Property
	+ Block level element (tag): 화면 전체를 쓰는 태그 ex) <h1>
	+ Inline element( tag) : 자신의 부피만큼 쓰는 태그 ex) <a>

+ 중복의 제거
	+ Selector에 같은 효과가 적용되면 `a, h1 { ~}` 으로 처리 가능
	+ Declartion, border: 5px solid red; 로 처리가능.
+ CSS Box model 검색 하여 알아낼 수도 있다.
+ 웹페이지 검사를 통해 알아낼 수도 있다.

- - -
## 박스모델 써먹기

+ 구현하고자 하는 페이지를 위하여 
	+ h1 Selector에 width-bottom (아랫쪽만 테두리 형성) Property를 적용한다.
	+ 너무 딱 붙어있어서 margin 값을 없애야 한다 (페이지 검사를 통한 추론)
	+ padding 값을 줘서 좀 더 간격을 만든다.
	+ ol Selector에 width-right를 추가한다.
	+ width를 줘서 간격 조정.
	+ 그래도 ol과 h1사이의 간격이 많다. ol의 margin을 없앤다. (페이지 검사로 추론)
	+ 리스트들이 너무 붙어있으니 padding을 줘 사회적 거리두기를 한다.
	+ 가장 바깥쪽 여백이 많으니 body태그의 margin을 0으로 한다.
w


- - -

## 그리드

+ `<div></div>` : 의미X 디자인용도 태그 Bolck level element
+ `<span></span>` : Inline element

+ div에 id를 준 후 `display :grid;` `grid-template-columns :150px 1fr(나머지 공간을 다쓴다는 의미);`
	+ Afr Bfr  : 화면 비 = A:B 

+ can i use 닷컴 : css, jsp, html 기술 중, 현재 얼마나 쓰고있는지 통계를 보여줌.



- - -

## 그리드 써먹기

+ 구현하고자하는 페이지를 위하여
	+ 리스트와 본문을 그리드로 묶어야 한다.
		+ 본문 h2와 p를 div로 묶고 이를 다시 리스트와도 묶는다.
	+리스트로 묶은 것의 id:grid로 하고 display:grid 와 g.t.c : 1fr로 한다.
	+리스트의 여백이 불편 -> padding left를 조정 (페이지 검사로 미리 조정해보기 가능하다.)
	+ ol selector는 다른 곳에서도 쓸 수 있으니 style에서 ol이 아닌 `#grid ol`로 한다
		
- - -

## Responsive Design
+ 웹은 모든 시스템에서 동작해야해서 수많은 화면에서 동작을 해야했다. 따라서 여러 화면에서 대응되는 웹을 만들기 위해 도입되었다.
	+ 화면의 크기에 따라 반응하여 동작하는 디자인

+ ```screen width > 800 px  div{display:none;}```
+  <pre>	<code>
	@media(min-width:800px) 
	{     
		div { 
			dispaly:none;
		 }

	 } 
	</code> </pre>
	+ media : media query를 의미
	+ min(or max) : 최소 혹은 최대 화면이 n일 때 작동


+ font-size[property]


- - -

## 미디어 쿼리 써먹기


+ 화면이 800보다 작으면 @media(max-width:800px)
	+  grid를 없앤다. <pre><code>
		#grid 
		{
		    	display : block;
		}
		ol 
		{
			    display : block;
		}				
		</code></pre>
	+ 세로 테두리를 없앤다. <pre><code>
		ol 
		{
			    border-right:none;
		}
		</code></pre>
	+ 가로 테두리를 없앤다. <pre><code>
		ol 
		{
		    	border-right:none;
		}
		</code></pre>