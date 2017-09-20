  $(function(){

    

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

    
        $('#dowebok').fullpage({
            sectionsColor: ['transparent', 'transparent', 'transparent', 'transparent','transparent', 'transparent'],
            //sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90'],
            //paddingTop: '68px',
            anchors:['home', 'abouts', 'services','news','clients','contacts'],
            menu: '#menuList',
            scrollBar:true,
            css3:true,
            autoScrolling:true,
            touchSensitivity:1,
            scrollOverflow:false,
            afterRender: function(anchorLink, index){
                wow = new WOW({
                      animateClass: 'animated',
                      mobile: true
                  });
                 wow.init();
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
});