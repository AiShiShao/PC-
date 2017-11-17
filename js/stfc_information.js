$(function(){
			//count height
			var height = $(".information_right").height();
			$(".information_count").height(height+100)
			
			var p1_text = $(".information_right_p1").text();
			if(p1_text.length > 300){
				var newtext1 = p1_text.substring(0,300)+'...';
				$(".information_right_p1").text(newtext1);
			}else{
				$(".information_right_p1").text(p1_text);
			}
			
			$(".information_left_ul li").click(function(){
				var dex = $(this).index();
				$(this).addClass("left_li").siblings().removeClass("left_li");
				$(this).children(".li_line").addClass("font_bg_color4").parents().siblings().children(".li_line").removeClass("font_bg_color4");
				
			})
			$(".information_left_ul2 li").click(function(){
				var details = $(this).text();
				$(this).addClass("font_color").siblings().removeClass("font_color");
				//
				$(".information_right_list").css("display","none");
				$(".information_details").find("h3").text(details);
			})
		})