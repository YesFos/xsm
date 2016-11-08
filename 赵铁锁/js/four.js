$(function(){
	$(".nav1 li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		var ss=$(this).index();
		$(".con_nn").eq(ss).show().siblings().hide();
	});
});