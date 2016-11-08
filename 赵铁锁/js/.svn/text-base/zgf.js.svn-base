$(function(){
	$(".swiper-container").hover(function(){
		$(".swiper-button-next").show();
		$(".swiper-button-prev").show();
	},function(){
		$(".swiper-button-next").hide();
		$(".swiper-button-prev").hide();
	});
	$(".icon .sh").hover(function(){
		$(".icon .sh img").css({"transform":"scale(1.3)"});
	},function(){
		$(".icon .sh img").css({"transform":"scale(1)"});
	});
	$(".icon1 .sh").hover(function(){
		$(".icon1 .sh img").css({"transform":"scale(1.3)"});
	},function(){
		$(".icon1 .sh img").css({"transform":"scale(1)"});
	});
	$(".icon2 .sh").hover(function(){
		$(".icon2 .sh img").css({"transform":"scale(1.3)"});
	},function(){
		$(".icon2 .sh img").css({"transform":"scale(1)"});
	});
	$(".icon3 .sh").hover(function(){
		$(".icon3 .sh img").css({"transform":"scale(1.3)"});
	},function(){
		$(".icon3 .sh img").css({"transform":"scale(1)"});
	});
	$(".icon4 .sh").hover(function(){
		$(".icon4 .sh img").css({"transform":"scale(1.3)"});
	},function(){
		$(".icon4 .sh img").css({"transform":"scale(1)"});
	});
	$(".icon5 .sh").hover(function(){
		$(".icon5 .sh img").css({"transform":"scale(1.3)"});
	},function(){
		$(".icon5 .sh img").css({"transform":"scale(1)"});
	});
	$(".icon6 .sh").hover(function(){
		$(".icon6 .sh img").css({"transform":"scale(1.3)"});
	},function(){
		$(".icon6 .sh img").css({"transform":"scale(1)"});
	});
	$(".icon7 .sh").hover(function(){
		$(".icon7 .sh img").css({"transform":"scale(1.3)"});
	},function(){
		$(".icon7 .sh img").css({"transform":"scale(1)"});
	});
	$(".icon8 .sh").hover(function(){
		$(".icon8 .sh img").css({"transform":"scale(1.3)"});
	},function(){
		$(".icon8 .sh img").css({"transform":"scale(1)"});
	});
	$(".dl_w").click(function(){
		$(".dlk").show();
		$(".dlk_bg").show();
	});
	$(".dl_m").click(function(){
		$(".dlk").hide();
		$(".dlk_bg").hide();
	});
	var H=$(window).height();
	var W=$(window).width();
	var JH=H/2-175;
	var JW=W/2-254;
	$(".dlk").css({"left":JW+"px","top":JH+"px"});
	function fun(){
		var se=$("#name1").val();
		var sr=$("#pasw").val();
		if (se.length==0) {
			return false;
		}
		if (sr.length==0) {
			return false;
		}
		return true;
	}
	$(".dl_btn").click(function(){
		if (fun()) {
			$(".dlk").hide();
			$(".dlk_bg").hide();
			$("#name1").val("");
			$("#pasw").val("");
		} else{
			alert("请输入账号，密码");
		}
	});
});