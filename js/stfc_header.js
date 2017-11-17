$(function() {
	//点击导航调用相应页面
	$('.header_center_two_ul li').click(function() {
		$(".header_top_center:eq(1)").addClass("header_none").siblings().removeClass("header_none");
		var thisdex = $(this).index();
		$(this).addClass("font_color").siblings().removeClass("font_color")
		switch(thisdex) {
			case 0:
				$("#frames").attr("src", "stfc_home.html"); //顺通首页
				frameheight();
				break;
			case 1:
				$("#frames").attr("src", "stfc_fullphotohouse.html"); //顺通全景看房
				frameheight();
				break;
			case 2:
				$("#frames").attr("src", "stfc_sellingHouse.html"); //顺通出售房
				frameheight();
				break;
			case 3:
				$("#frames").attr("src", "stfc_renthouse.html"); //顺通出租房
				frameheight();
				break;
			case 4:
				$("#frames").attr("src", "stfc_information.html"); //房产资讯
				frameheight();
				break;
			case 5:
				$("#frames").attr("src", "stfc_broker.html"); //经纪人
				frameheight();
				break;
			case 6:
				$("#frames").attr("src", "stfc_houseloan.html"); //房屋贷款
				frameheight();
				break;
			case 7:
				$("#frames").attr("src", "stfc_housemap.html"); //地图找房
				frameheight();
				break;
			case 8:
				$("#frames").attr("src", "stfc_interlocution.html"); //问答
				frameheight();
				break;
			case 9:
				$("#frames").attr("src", "stfc_branchoffice.html"); //顺通分店
				frameheight();
				break;
			case 10:
				$("#frames").attr("src", "stfc_abouts.html"); //关于顺通
				frameheight();
				break;
			default:
				//						$("#frames").attr("src","stfc_home.html");
				break;
		}
	})
})

function choosehtml(index) {
	$(".header_top_center:eq(1)").addClass("header_none").siblings().removeClass("header_none");
	switch(index) {
		case 0:
			$("#frames").attr("src", "stfc_housemap.html"); //地图找房
			frameheight();
			break;
		case 2:
			$("#frames").attr("src", "stfc_rent_sellinghouse.html"); //顺通出售房
			frameheight();
			break;
		case 3:
			$("#frames").attr("src", "stfc_renthouse.html"); //顺通出租房
			frameheight();
			break;
		case 5:
			$("#frames").attr("src", "stfc_broker_xq.html"); //经纪人
			frameheight();
			break;
		case 8:
			$("#frames").attr("src", "stfc_interlocutions.html"); //问答
			frameheight();
			break;
		case 9:
			$("#frames").attr("src", "stfc_branchoffice_xq.html"); //顺通分店
			frameheight();
			break;
		default:
			//						$("#frames").attr("src","stfc_home.html");
			break;
	}
}

function gologin(dex) {
	$(".header_top_center:eq(0)").addClass("header_none").siblings().removeClass("header_none");
	if(dex == 0) {
		$("#frames").attr("src", "stfc_login.html"); //顺通出售房
		frameheight();
	} else {
		$("#frames").attr("src", "stfc_register.html"); //顺通出售房
		frameheight();
	}
}

function frameheight() {
	setTimeout(function() {
		var main = $("#frames").contents().find(".mian");
		var mainheight = main.height();
		$("#frames").height(mainheight)
	}, 300)
}