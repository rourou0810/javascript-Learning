  $(function(){

    var total=100;
    var breaker=50;
    var turn=100/(total/breaker);
    var progress=0;
    var timer = setInterval(function(){
        progress=progress+turn;
        $(".sr-only").html(progress+"% 完成");
        $("#prog").attr("style", "width:"+progress+"%");
        if (progress>=100) {
            clearInterval(timer);

            $('#loading').addClass('isCompleted');
            
            alreadyLoad();
        }
    }, breaker);
    

    function section(){
        
        $('.section1').delay(50).animate({
            opacity: '1'
        }, 100, function(){
            $(".resume").addClass("on");
            setTimeout(function(){
                $(".resume").addClass("dong") 
            },250)
        });
    }
    section();


    function IsPC() {
        var userAgentInfo = navigator.userAgent;
        var Agents = ["Android", "iPhone",
                    "SymbianOS", "Windows Phone",
                    "iPad", "iPod"];
        var flag = true;
        for (var v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
                flag = false;
                break;
            }
        }
        return flag;
    }

    function alreadyLoad() {
        var mySwiper1;  
    if(!IsPC()) {
        $('.scroll-down').show();
    }
    $('#dowebok').fullpage({
        sectionsColor: ['transparent', 'transparent', 'transparent', 'transparent','transparent', 'transparent'],
        //paddingTop: '68px',
        anchors:['home', 'abouts', 'services','news','clients','contacts'],
        menu: '#menuList',
        //scrollBar:true,
        afterRender: function(anchorLink, index){
            // wow = new WOW({
            //       animateClass: 'animated',
            //   });
            //  wow.init();
            $('.home-logo img').addClass('zoomIn opacityShow animated');
            $('.home-logo .text2').addClass('bounceInLeft opacityShow animated');
            $('.home .title-text').addClass('bounceInRight opacityShow animated');
        },
        afterLoad:function(anchorLink, index) {
            if(index == 1) {
                $('.home-logo img').addClass('zoomIn opacityShow animated');
                $('.home-logo .text2').addClass('bounceInLeft opacityShow animated');
                $('.home .title-text').addClass('bounceInRight opacityShow animated');
            }
            if(index == 2) {
                mySwiper1 = new Swiper('.abouts .swiper-container1', {
                    autoplay: 10000,//可选选项，自动滑动
                    prevButton:'.swiper-button-prev',
                    nextButton:'.swiper-button-next',
                    pagination : '.abouts .swiper-p1',
                    lazyLoading: true,
                    paginationClickable :true,
                    autoplayDisableOnInteraction : false,
                    onInit: function(mySwiper1){ //Swiper2.x的初始化是onFirstInit
                        swiperAnimateCache(mySwiper1); //隐藏动画元素 
                        swiperAnimate(mySwiper1); //初始化完成开始动画
                    },
                    onSlideChangeEnd: function(mySwiper1){ 
                        swiperAnimate(mySwiper1); //每个slide切换结束时也运行当前slide动画
                    }
                })
            }
            if(index == 3) {
                $('.services .content-title p').addClass('bounceIn opacityShow animated');
                $('.services .services-icon').addClass('bounceIn opacityShow animated');
            }
            if(index == 4) {
                $('.news .content-title p').addClass('bounceIn opacityShow animated');
                $('.news .news-item').addClass('fadeInRight animated');
            }
            if(index == 5) {
                $('.clients .content-title p').addClass('bounceIn opacityShow animated');
                $('.clients .logo-item').addClass('flipInY opacityShow animated');
            }
            if(index == 6) {
                $('.contacts .content-title p').addClass('bounceIn opacityShow animated');
                $('.contacts .contact-item-1').addClass('flipInX opacityShow animated');
            }
        },
        onLeave:function(index,nextIndex,direction){
            /*if(index == 1) {
                $('.home-logo img').removeClass('zoomIn opacityShow animated');
                $('.home-logo .text2').removeClass('bounceInLeft opacityShow animated');
                $('.home .title-text').removeClass('bounceInRight opacityShow animated');
            }
            if(index == 2) {
                mySwiper1.destroy(false); 
            }
            if(index == 3) {
                $('.services .content-title p').removeClass('bounceIn opacityShow animated');
                $('.services .services-icon').removeClass('bounceIn opacityShow animated');
            }
            if(index == 4) {
                $('.news .content-title p').removeClass('bounceIn opacityShow animated');
                $('.news .news-item').removeClass('fadeInRight animated');
            }
            if(index == 5) {
                $('.clients .content-title p').removeClass('bounceIn opacityShow animated');
                $('.clients .logo-item').removeClass('flipInY opacityShow animated');
            }
            if(index == 6) {
                $('.contacts .content-title p').removeClass('bounceIn opacityShow animated');
                $('.contacts .contact-item-1').removeClass('flipInX opacityShow animated');
            }*/
        }
    });

    
    



    $(".news-item").hover(
        function () {
            $(this).find('.common-btn-white').addClass("common-btn-yellow");
        },
        function () {
            $(this).find('.common-btn-white').removeClass("common-btn-yellow");
        }
    );
    }
    
    
});