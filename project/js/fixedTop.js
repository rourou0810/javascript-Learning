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
		$(".J-article").addClass("fn-hide");
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
		$(this).click(function() {
			$(this).addClass("on").siblings().removeClass("on");
			$(".J-login-box>div").eq(index).removeClass("fn-hide").siblings().addClass("fn-hide");
		})
	})


	//payorder.html order view
	var isView = true;
	$("#orderView").click(function() {
		if (isView) {
			$(this).addClass("fn-bold go-icon-down");
			$(this).siblings("dd").show();
			isView = false;
		} else {
			$(this).removeClass("fn-bold go-icon-down");
			$(this).siblings("dd").hide();
			isView = true;
		}

	})

	//payment methods is show
	var isShowMethod = true;
	$("#payMethod dl dt").each(function(index, el) {
		$(this).click(function() {
			if (index != 0 && isShowMethod) {
				$(this).find("span").show();
				$(this).find("i").hide();
				$(this).siblings("dd").show();
				isShowMethod = false;
			} else if (index != 0 && isShowMethod == false) {
				$(this).find("i").show();
				$(this).find("span").hide();
				$(this).siblings("dd").hide();
				isShowMethod = true;
			}
		})
	})


	$(".paypal-amount").each(function(){
		$(this).click(function(){
			$("#payInformation").show();
		})
	})

	$(".info-popup h3 i[_v-5655eb48]").click(function(){
		$("#payInformation").hide();
	})

	$(".order-review-img .product-list").click(function(){
		$(".product-box").show();
	})

	$(".product-box .product-title").click(function(){
		$(".product-box").hide();
	})


	//mywishlist remove
	$(".J-ico-close").click(function(event) {
		$(".J-alt-box").removeClass("fn-hide");
	});

	$(".J-alt-box-bg").click(function(){
		$(".J-alt-box").addClass("fn-hide");
	})

	//mywishlist addbag
	$(".J-wish-add-bag").click(function(){
		$(".J_contain_cover").show();
		$(".J-article").removeClass("fn-hide");
	})

	$(".J-cart-box-close").click(function(){
		$(".J_contain_cover").hide();
		$(".J-article").addClass("fn-hide");
	})
});