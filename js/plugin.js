/* global $, alert, console, window,log */

$(function () {
	'use strict';
    //////////////////////
    $('body').css({
        paddingTop : $('.navbar').innerHeight()
    });
    ///////////////////////
    
    /*********** start navbar ***********/
    $("li a").on("click", function () {
        $("html, body").animate({
            scrollTop: $('#' + $(this).data('scroll')).offset().top
           
        }, 600);
        
         $(this).addClass('active , text-color').parent().siblings().find('a').removeClass('active , text-color');
    });
    /*********** end navbar ***********/

  $(window).scroll(function (){
       $(".home").height($(window).height());
  });
    
    
    /******* start home *******/
    $(".home").height($(window).height());
    /******* end home ********/
    
    /******* start animate button ******/
    
    (function  animetbutton(){
        
         $('.button .point').animate({
        top: '80%'
    },700 ,function(){
       $(this).fadeOut(300, function() {
         $(this).animate({
             top: '10%',
         },200 ,function(){
            $(this).fadeIn(300 ,function(){
                animetbutton();
            }); 
         });  
       });
    });
    
    } ());
    
  
    
    /******** end animate button ***********/
    
        
      $('.button ').click(function() {
       $("html, body").animate({
         scrollTop: $('#' + $(this).data('scroll')).offset().top 
       },600)
          
    });
   /////////////////////////////////////////
    $('#example').textition({
        autoplay: true,
    });
    
    
    //////////////////////////////////////////////
    
   
    
    
    $('.click-about button').hover(function() {
        $(this).find('span').eq(0).animate({
            width : "100" +"%"
        },500);
        $(this).find('span').eq(1).css('color',"#00d7ef");
    },function(){
        $(this).find('span').eq(0).animate({
            width : "0" 
        },500);
        $(this).find('span').eq(1).css('color',"#fff");
    });
    
    
    /*****************////////**************/*************/////////////****/
    
    // /// /// / / / / / / / / / start window scroll ////// // / / 
    
    $(window).scroll(function (){
        
        var MYscroll = $(window).scrollTop();
        if( MYscroll >= 660)
            {
                 /************* start a progress  par ************/

                $('.cont-span span').each(function() {
                   $(this).animate({
                     width : $(this).data('width') + '%',  
                   }, 1000 ,function(){
                       $('.cont p>span').fadeIn(600)
                   });
                });

                ////////////////////////////////////////////////
                $('.cont-info h3').slideDown(500,function(){
                    $('.cont-info p').fadeIn(500,function(){
                        $('.cont-info button').slideDown(500)
                    });
                });
                /////////////////////////////////////////////
                
               
                
            }
        
        
     //  console.log(MYscroll);
    });
    
    
    
    $(window).scroll(function(){
       $('.block').each(function(){
            if($(window).scrollTop() > $(this).offset().top )
                {
                    var myID = $(this).attr('id'); 
                    $('.navbar li a[dara-scroll="'+myID+'"] ').addClass('active')
                }
        }); 
    });
    
    
    
    
    $('.fixd-menu .fa-sun').click(function(){
       $(this).parent('.fixd-menu').toggleClass('visible'); 
          if($(this).parent('.fixd-menu').hasClass('visible'))
        {
            $(this).parent('.fixd-menu').animate({
                left:"0",
            },500);
        }
        else
        {
             $(this).parent('.fixd-menu').animate({
               left:"-170px",
            },500);
        }
       
    });
    
    /*********************************************/
    
    $('.fixd-menu li').on('click',function(){
       $('body').attr('data-defualt-color',$(this).data('color')); 
        $('h2::after').addClass('back-color');
        
    });
    
  /**************************************/
    
    $(function slid(){

        $('.cont-serv .active').each(function(){

            if(!$(this).is(':last-child'))
            {
                $(this).delay(2000).fadeOut(2000, function () {

                    $(this).removeClass('active').next().addClass('active').fadeIn(2000)

                    slid();
                });
            }
            else
            {
                $(this).delay(2000).fadeOut(2000, function() {
                    $(this).removeClass('active');
                    $('.cont-serv .contanier div').eq(0).addClass('active');
                    slid();
                });
            }
        });
    });
        


        /*********************************************************/


         var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });
    
    /*//*************************//*/*/

    $('section h3, section h4').hover(function(){
       $(this).find('span').animate({
          width: $(this).width() 
       },300); 
    },function(){
        $(this).find('span').animate({
          width: '0' 
       },300); 
    });

    
    
    
});


