var Links = {
	setColor:function(color)
	{
		$('a').css("color",color);
		// var alist = document.querySelectorAll('a');
		// var i = 0;
		// while(i < alist.length)
		// {
		// 	alist[i].style.color = color;
		// 	i = i +1;
		// }
	}
}
var Body = {
	setColor:function(color)
	{
		$('body').css('color',color);
		//document.querySelector('body').style.color = color;
	},
	setbackgroundColor:function(color)
	{
		$('body').css('backgroundcolor',color);
	}
}
function nightdayHandler(self)
{
	var target = document.querySelector('body');
	if(self.value === 'night') {

		Body.setColor('white');
		Body.setbackgroundColor('black');
		self.value = 'day'; 
		Links.setColor('powderblue');
	}
	else {
		target.style.backgroundColor = 'white';
		target.style.color = 'black';
		self.value = 'night';
		Links.setColor('blue');
	}
}
