$(function() {

	//search show/hide
	var isclick = true;
	$(".J-header-search-btn").click(function(event) {
		if (isclick) {
			$(".J-header-serach-cnt-box").slideDown(200);
			$(".ft-list-box").animate({
				"margin-top": "88px"
			}, 200);
			isclick = false;
		} else {
			$(".J-header-serach-cnt-box").slideUp(200);
			$(".ft-list-box").animate({
				"margin-top": "44px"
			}, 200);
			isclick = true;
		}

	})

	//left tree
	$(".col-sub").click(function() {
		$(".contain_cover").css("display", "block");
		$("#aside-left").css("visibility", "visible");
	});
	$(".J_contain_cover").click(function() {
		$(".contain_cover").css("display", "none");
		$("#aside-left").css("visibility", "hidden");
		$(".J-alt-box").hide(200);
	});

	$(".J-siderbar-cat").each(function(index, el) {
		$(this).click(function() {
			$(".J-siderbar-cat-sub-div").eq(index).animate({
				left: 0
			}, 300);
			$(".J-siderbar-cat-sub-div").eq(index).find(".siderbar-cat").click(function() {
				$(this).parent().animate({
					left: "-100%"
				}, 300);
			});
		});
	});


	//select size/color
	$(".main-box .article").click(function() {
		//$(".contain_cover").css("display", "block");
		$(".J-box-cart-bg").removeClass("fn-hide");
	})

	//colsed select size/color
	$(".J-cart-box-close").click(function() {
		$(".J-box-cart-bg").addClass("fn-hide");
	})

	//size add attr .on
	$(".goods-attr-container .attr-container-list span").each(function(index, el) {
		$(this).click(function() {
			$(this).addClass("on").siblings().removeClass("on");
		})
	})

	$("input[name=add]").click(function() {
		var addResult = parseInt($("#J-number").val()) + 1;

		$("#J-number").val(addResult);
	})

	$("input[name=sub]").click(function() {
		var subResult = parseInt($("#J-number").val()) - 1;
		if (subResult < 1) {
			return;
		}
		$("#J-number").val(subResult);
	})


	//remove alert
	$(".product_wrap ul li").each(function(index, el) {
		$(this).find('.J-ico-close').click(function() {
			$(".contain_cover").css("display", "block");
			$(".J-alt-box").show(200);
		})
	})


	//login/register
	$(".login-reg-title li").each(function(index, el) {
		$(this).click(function(){
			$(this).addClass("on").siblings().removeClass("on");
			$(".J-login-box>div").eq(index).removeClass("fn-hide").siblings().addClass("fn-hide");
		})
	})
});