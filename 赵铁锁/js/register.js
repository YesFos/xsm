$(function(){
	function yan(){
		$("#name1").blur(function(){
			var name1=$("#name1").val();
			var reg=/^[\u4e00-\u9fa5]{2,4}$/;
			if (!reg.test(name1)) {
				$(".name1").html("输入错误！！");
				return false;
			}else{
				$(".name1").html("输入正确");
				$(".name1").css("color","#00FF33");
			}
		});
		
		$("#pasw").blur(function(){
			var pasw=$("#pasw").val();
			var reg1=/^[0-9]{8,16}$/;
			if (!reg1.test(pasw)) {
				$(".passw").html("输入错误！！");
				return false;
			}else{
				$(".passw").html("输入正确");
				$(".passw").css("color","#00FF33");
			}
		});
		
		$("#pasw1").blur(function(){
			var pasw1=$("#pasw1").val();
			var pasw=$("#pasw").val();
			if (pasw1!=pasw) {
				$(".qpassw").html("两次输入不一致！！");
				return false;
			}else{
				$(".qpassw").html("输入正确");
				$(".qpassw").css("color","#00FF33");
			}
		});
		
		$("#email").blur(function(){
			var emali=$("#email").val();
			var reg2=/^\w+@\w+(\.[a-zA-Z]{2,3}){1,2}$/;
			if (!reg2.test(emali)) {
				$(".emali").html("邮箱地址输入错误！！");
				return false;
			} else{
				$(".emali").html("输入正确");
				$(".emali").css("color","#00FF33");
			}
		});
		
		$("#phon").blur(function(){
			var phon=$("#phon").val();
			var reg3=/^1\d{10}$/;
			if (!reg3.test(phon)) {
				$(".phone").html("手机号格式输入错误！！");
				return false;
			} else{
				$(".phone").html("输入正确");
				$(".phone").css("color","#00FF33");
			}
		});
	}yan();
	$("#sub").click(function(){
		if ($(".name1").html()=="输入正确"&&$(".passw").html()=="输入正确"&&$(".qpassw").html()=="输入正确"&&$(".emali").html()=="输入正确"&&$(".phone").html()=="输入正确") {
			alert("注册成功！！");
		}
	});
	$("#res").click(function(){
		name1=$("#name1").val("");
		pasw=$("#pasw").val("");
		pasw1=$("#pasw1").val("");
		emali=$("#email").val("");
		phon=$("#phon").val("");
		$(".name1").html("");
		$(".passw").html("");
		$(".qpassw").html("");
		$(".emali").html("");
		$(".phone").html("");
	});
});