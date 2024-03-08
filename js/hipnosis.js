


// $('.prev').click(function(){

//   $('.slide li:last').prependTo('.slide');

//   $('.slide').css('margin-left',-300);

//   $('.slide').stop().animate({marginLeft:0},800);

// });


// $('.next').click(function(){

//  $('.slide').stop().animate({marginLeft:-300},800, function(){

//     $('.slide li:first').appendTo('.slide');

//     $('.slide').css({marginLeft:0});

//  });

// });



// function prev(){

//   $('.slide li:last').prependTo('.slide');

//   $('.slide').css('margin-left',-500);       // $('.slide').css({marginLeft:-1000}); 

//   $('.slide').stop().animate({marginLeft:0},800);

// }



// function next(){

//   $('.slide').stop().animate({marginLeft:-500},800, function(){

//      $('.slide li:first').appendTo('.slide');

//      $('.slide').css({marginLeft:0});

//   });

// }


$(function(){
if(window.matchMedia("(min-width:1400px").matches){
  
  $('.prev').click(function(){
    $('.slide li:last').prependTo('.slide');
    $('.slide').css('margin-left',-1200);
    $('.slide').stop().animate({marginLeft:0},800);
  });

  $('.next').click(function(){
    $('.slide').stop().animate({marginLeft:-1200},800, function(){
    $('.slide li:first').appendTo('.slide');
    $('.slide').css({marginLeft:0});
    });
  });

} else{
  let w=$(window).innerWidth();
  $('.prev').click(function(){
    $('.slide li:last').prependTo('.slide');
    $('.slide').css('margin-left',-w);
    $('.slide').stop().animate({marginLeft:0},800);
  });

  $('.next').click(function(){
    $('.slide').stop().animate({marginLeft:-w},800, function(){
    $('.slide li:first').appendTo('.slide');
    $('.slide').css({marginLeft:0});
    });
  });
    

}
});

setInterval(next(), 1000);  


$(document).ready(function(){
$('.prev').click(function(){

  prev();

});


$('.next').click(function(){

  next();

});
});





// $('.prev').click(function(){
//   $('.slide li:last').prependTo('.slide');
//   $('.slide').css('margin-left',-1200);
//   $('.slide').stop().animate({marginLeft:0},800);
// });
// $('.next').click(function(){
//   $('.slide').stop().animate({marginLeft:-1200},800,function(){
//     $('.slide li:first').appendTo('.slide');
//     $('.slide').css({marginLeft:0});
//   });
// });

// function prev(){

//   $('.slide li:last').prependTo('.slide');

//   $('.slide').css('margin-left',-1000);       // $('.slide').css({marginLeft:-1000}); 

//   $('.slide').stop().animate({marginLeft:0},800);

// }
// function next(){

//   $('.slide').stop().animate({marginLeft:-1000},800, function(){

//      $('.slide li:first').appendTo('.slide');

//      $('.slide').css({marginLeft:0});

//   });

// }
// setInterval(next(), 3000);
//   //자동슬라이드
// $(document).ready(function(){


// //버튼 슬라이드

// $('.prev').click(function(){

//   prev();

// });



// $('.next').click(function(){

//   next();

// });



// });



