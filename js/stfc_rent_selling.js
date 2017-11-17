$(function(){
			var sumlli =0;//记录是否有选择条件
			$(".city_lists:eq(1)").hide();
			$(".city_choose_center_ul li:eq(1)").click(function(){
				 parent.choosehtml(0);
			})
			
			//区域选择器
			$(".city_list1_ul li").click(function() {
				dex = $(this).index(".city_list1_ul li");
				$(this).addClass("adli").siblings().removeClass("adli");
				var line = $(this).parent().attr("id");
				if($(this).hasClass("select")) {
					$("#select" + line).remove();
				} else {
					var copyThisA = $(this).clone();
					if($("#select" + line).length > 0) {
						var text = $(this).text().split('X');
						var newtext = text[0];
						$("#select" + line).html(newtext+'<i>X</i>');
						
					} else {
						if($("#selectadd").hasClass("select_all") && line =='C'){
							var newinserttext = copyThisA.text().split('X');
							var newinsert = newinserttext[0];
							$("#selectadd").html(newinsert+'<i>X</i>');
						}else{
							$(".city_map_click").append(copyThisA.attr("id", 'select' + line));
							$(".city_map_click_span").show();
							sumlli++;
							
						}	
					}
				}
			})
			
			$(document).on("click", ".city_map_click li", function() {
				var line_id = $(this).attr("id");
				var temp = line_id.substring(line_id.length, line_id.length - 1);
				$("#" + line_id).remove();
				$("#"+temp).find("li").removeClass("adli");
				sumlli--;
				if(sumlli == 0){$(".city_map_click_span").hide();}
			})
            //输入价格标签
            $(".area_submit").click(function(){
				var input1 = document.getElementById("input1").value;
				var input2 = document.getElementById("input2").value;
			     if(!isNaN(input1) && !isNaN(input2)){
			     	if(input1!='' && input2!= ''){
			     		if(input1 != input2 && input1 < input2){
			     		    selectadd = "<li id='selectadd' class='select_all'>"+input1+"-"+input2+"元"+'<i>X</i>'+"</li>"
				            if($("#selectadd").hasClass("select_all")){
				             $("#selectadd").text(input1+"-"+input2+"元");
				            }else{
				            	 if(!$("#selectC").text() == ''){
				                    inserttext = input1+"-"+input2+"元";
				                     $("#selectC").html(inserttext+'<i>X</i>');
				            	 }else{
				            	 	$(".city_map_click").append(selectadd)
				            	 	sumlli++;
				            	 }
				            }
					     	
			     	   }
			     		document.getElementById("input1").value='';
					    document.getElementById("input2").value='';
			     	}
			     }else{
			     	alert("请输入数字");
			     	document.getElementById("input1").value='';
					document.getElementById("input2").value='';
			     }
			     
			})
  
            //轮播
           
        $(".prev_button_rent").click(function(){
        	 var i =0;
        	i--;
        	if(i<=-1){
        		i=$(".smile_img_ul li").length-1;
        	}
        	var imgsrc= $(".smile_img_ul li:eq("+i+")").find("img").attr("src");
         	$(".smile_img_ul").find('li:last').prependTo($(".smile_img_ul"));
         	$(".smile_img_ul").css({left:-112});
         	$(".smile_img_ul").stop().animate({left:0});
         	$(".rent_sell_leftbaner_ul li").find("img").attr("src",imgsrc)
         })
         //后一个
         $(".next_button_rent").click(function(){
         	 var i =0;
         	i++;
         	if(i>=$(".smile_img_ul li").length-1){
         		i=0;
         	}
         	var imgsrc= $(".smile_img_ul li:eq("+i+")").find("img").attr("src");
         	$(".smile_img_ul:not(:animated)").animate({left:-112},
      		function(){
         		$(".smile_img_ul").find('li').eq(0).appendTo($(".smile_img_ul"));
         		$(".smile_img_ul").css({'left':0});
        	})
         		$(".rent_sell_leftbaner_ul li").find("img").attr("src",imgsrc)
         })
  
			  $(".smile_img_ul li").click(function(){
			  	var clickimg = $(this).find("img").attr("src");
			  	$(".rent_sell_leftbaner_ul li").find("img").attr("src",clickimg)
			  })
		})