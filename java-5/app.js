$(function(){ //  予約状態  //
  $('.box1').slideDown(function(){  // slideDownした後に引数であるfunctionを実行  //
    $('.box1').css({
      'background-color': '#0000FF',
      'heigth': '100px',
      'width': '200px'
  }).slideUp();
  });
});

// $(function(){
//   $('.box1').css({
//     'background-color': '#0000FF',
//     'height': '100px'
//   });
// });
