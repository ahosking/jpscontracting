jQuery(window).load(function(){
    'use strict'; 
    jQuery('.twitter_widget').flexslider({
    	animation: "slide",
    });
});

/*-------
 *  menu toggle Function
  --------------------------------------------------------------------------- */
 
// jQuery(document).ready(function() {
//   jQuery(".navigation>ul") .prepend("<a class='cs-close-btn'><i class='icon-times-circle'></i></a>");
//     MenuToggle();
 
//  jQuery(".navigation .responsive-btn") .click(function(){
//   if(jQuery(this).parent('li').hasClass('active')){
//    jQuery(this).html("<i class='icon-plus8'></i>");
//    jQuery('.navigation li').removeClass('active');
//    jQuery(this).siblings('ul').hide();

//   }else{
//    jQuery(".navigation .responsive-btn").html("<i class='icon-plus8'></i>");
//    jQuery(this).html("<i class='icon-minus8'></i>");
//    jQuery('.navigation li').removeClass('active');
//    jQuery(this).parent('li').addClass('active');
//    jQuery(this).parent('li').parent('ul').find('li>ul').hide();
//    jQuery(this).siblings('ul').show();
//    return false;
//   }
//  });
//  jQuery('.cs-click-menu').on('click', function(e) {
//  	e.preventDefault();
// 	jQuery(this).next().toggle();
// 	jQuery(".navigation ul ul") .hide();
//  });
//  jQuery('.cs-close-btn').on('click', function(e){
//  	e.preventDefault();
//  	jQuery(this).parent('ul').hide();
//  });
// });
// function MenuToggle() {
// 	jQuery(".navigation ul ul") .parent('li') .addClass('parentIcon');
// 	jQuery(".navigation ul ul") .parent('li') .prepend( "<span class='responsive-btn'><i class='icon-plus8'></i></span>" );
// }
// 	var a = jQuery(window).width();
// 	var b = 1000
// 	if (a >= b) {
// 		jQuery(".navigation ul ul,.navigation ul") .show();
// 	}else{
// 		jQuery(".navigation ul ul,.navigation ul") .hide();
// 	}


jQuery(document).ready(function() {
  var a = jQuery(window).width();
  var b = 1000
  if (a >= b) {
    jQuery(".navigation ul ul,.navigation ul") .show();
  }else{
    jQuery(".navigation ul ul,.navigation ul") .hide();
  }
  "use strict";
  jQuery(".navigation ul ul") .parent('li') .addClass('parentIcon');
  jQuery(".navigation ul ul") .parent('li') .prepend( "<span class='responsive-btn'><i class='icon-plus8'></i></span>" );
  jQuery(".navigation ul a").click(function(e){
    var a = jQuery(window).width();
    var b = 1000
    if (a <= b) {
      if(jQuery(this).attr('href') == '' || jQuery(this).attr('href') == '#'){
        e.preventDefault();
      }
      var dropCheck = jQuery(this).siblings('ul');


      if(dropCheck.length != ''){
        if(jQuery(this).closest('li').hasClass('active')){
          jQuery(this).siblings('.responsive-btn').html("<i class='icon-plus8'></i>");
          jQuery(this).closest('li').removeClass('active');
          jQuery(this).siblings('ul').slideUp();
        }else{
          jQuery(this).closest('ul').find('.responsive-btn').html("<i class='icon-plus8'></i>");
          jQuery(this).siblings('.responsive-btn').html("<i class='icon-minus8'></i>");
          jQuery(this).closest('ul').find('>li').removeClass('active');
          jQuery(this).closest('li').addClass('active');
          jQuery(this).closest('ul').find('li').find('>ul').slideUp();
          jQuery(this).siblings('ul').slideDown();
        }
      }
    }
  });

  jQuery('.cs-click-menu').on('click', function(e) {
    "use strict";
    var a = jQuery(window).width();
    var b = 1000
    if (a <= b) {
      e.preventDefault();
      jQuery(this).next().slideToggle();
      jQuery(".navigation ul ul") .hide();
    }
  });
});

jQuery(window).resize(function($) {
  var a = jQuery(window).width();
  var b = 1000
  if (a >= b) {
    jQuery(".navigation ul ul,.navigation ul") .show();
  }else{
    jQuery(".navigation ul ul,.navigation ul") .hide();
  }
    
});

jQuery(document).ready(function(){
    'use strict'; 
    jQuery('.px-main-nav').scrollToFixed(); 
});

/* ---------------------------------------------------------------------------
  * nice scroll for theme
  * --------------------------------------------------------------------------- */
  jQuery(document).ready(function(){
    'use strict'; 
    jQuery("html").niceScroll({mousescrollstep: "20",scrollspeed: "150",}); 
  });