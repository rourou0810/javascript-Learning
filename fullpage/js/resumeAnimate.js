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

    $('#dowebok').fullpage({
        sectionsColor: ['transparent', 'transparent', 'transparent', 'transparent','transparent', 'transparent'],
        //sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90'],
        //paddingTop: '114px',
        anchors:['home', 'abouts', 'services','news','clients','contacts'],
        menu: '#menuList',
        scrollBar:true,
        touchSensitivity:1,
        afterRender: function(anchorLink, index){
            wow = new WOW({
                  animateClass: 'animated',
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