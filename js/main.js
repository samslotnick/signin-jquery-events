$(".signin").click(function(){
  $(".modal").fadeIn();
});
$(".close").click(function(){
  $(".modal").fadeOut();
});
  $(".submit").click(function(){
   $("input").addClass("error");
  });
$( "input[name='user']").click(function(){
  $("input[name='user']").removeClass("error");
});

$( "input[name='password']").click(function(){
  $("input[name='password']").removeClass("error");
});
