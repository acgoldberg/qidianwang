			window.onload = function(){
				//起点中文网
				var firstLi = document.getElementById("firstLi");
				var first = document.getElementById("first");
				firstLi.onmouseover = function(){
					var first = document.getElementById("first");
					first.className="show";
				}
				firstLi.onmouseout = function(){
					var firstLi = document.getElementById("firstLi");
					var first = document.getElementById("first");					
					first.className="hide";					
				}				
				
				
				
				//手机阅读
				var secondLi = document.getElementById("secondLi");
				var second = document.getElementById("second");
				secondLi.onmouseover = function(){
					var second = document.getElementById("second");
					second.className="show"
				}
				secondLi.onmouseout = function(){
					var second = document.getElementById("second");
					second.className="hide"
				}
				
				//最近阅读
				var thirdLi = document.getElementById("thirdLi");
				var third = document.getElementById("third");
				thirdLi.onmouseover = function(){
					var third = document.getElementById("third");
					third.className="show"
				}
				thirdLi.onmouseout = function(){
					var third = document.getElementById("third");
					third.className="hide"
				}
				//快速导航
				var fourthLi = document.getElementById("fourthLi");
				var fourth = document.getElementById("fourth");
				fourthLi.onmouseover = function(){
					var fourth = document.getElementById("fourth");
					fourth.className="show"
				}
				fourthLi.onmouseout = function(){
					var fourth = document.getElementById("fourth");
					fourth.className="hide"
				}
				
					
				var third=document.getElementById("third");						
				third.onmouseover=function(){
					var pid = document.getElementById("pid");
					pid.className="show";
				third.onmouseout = function(){
					var pid = document.getElementById("pid");
					pid.className="hide"
				}
						
						
					}
				
			}
			
		
			
	