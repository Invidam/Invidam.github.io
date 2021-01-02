# WEB2 JavaScript

- - - 

## 13. 리펙토링{refactoring}
+ 코드 개선 작업
	+ 1.코드 효율 증가 
	+ 2.가독성 증가 
	+ 3. 유지 보수 용이
+ onclick 태그가 자기 자신을 가리킬 때 : this를 사용
	+ document.querySelector('#night_day') -> this 로 변경하면 어디에서든 잘 작동.

+ var target = document.querySelector('body'); : target을 body태그 지칭 시킴. 
	+ 앞으로 길게 쓸 필요없이 target을 이용하면 되며, target만 바꾸어주면 다른 태그를 지정할 수 있게 됨.



- - -

## 14. 반복문 예고

+ 여러개의 태그를 선택하는 방법으로 이동 (배열,반복문 강의 pass)

+ document.write('<li>'+coworkers[i]+''</li>');
	+ '+' : 객체와 객체 사이를 연결하거나 분리하는 기능을 함

- - -


## 15. 배열문과 반복문의 활용

+ colsole, shift + enter : 엔터 안되고 추가 명령 가능

+ document.querySelectorAll('a') : 모든 a태그를 list화하여 리턴
	+ while문 + colsole.log()로 확인 가능
	+ 이를 이용하여 alist[i].style.color = 'colorA'; 로 모든 색상 변경 가능.
		
- - -


## 16. 함수 예고

+ onclick = "text" : 안의 내용을 함수화 시킨다.
	+ ``` html
    <script>
funtion fun(self){
	text
}

	</script>
```