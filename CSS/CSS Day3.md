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

+ 구현하고자 하는 페이지를 위하여 h1 


- - -

## 그리드

+ `<div></div>` : 의미X 디자인용도 태그 Bolck level element
+ `<span></span>` : Inline element

+ div에 id를 준 후 `display :grid;` `grid-template-columns :150px 1fr(나머지 공간을 다쓴다는 의미);`
	+ Afr Bfr  : 화면 비 = A:B 

+ can i use 닷컴 : css, jsp, html 기술 중, 현재 얼마나 쓰고있는지 통계를 보여줌.


