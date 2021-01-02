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
``` c
    int val = 10;
	printf(%s,"Hello, World!");
	if(val < 20)
	{
		val++;
	}
```

## 15. 