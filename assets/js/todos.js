// check off todos by clicking
$(document).ready(function () {
  $("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});

//remove todo via x icon whatever

$("ul").on("click", "span", function (event) {
  $(this).parent().fadeOut(500, function () {
    $(this).remove();
  });
  event.stopPropagation();
})
});

$("input[type='text']").keypress(function (event) {
  if(event.which === 13){
    //grabbing text from input
    var todoText = $(this).val();
    $(this).val("");
    //create a new li and add to ul
    $("ul").append("<li><span><i class='fa fa-trash-o' aria-hidden='true'></i></span> " + todoText + "</li>");
  }
});

$(".fa-plus").click(function () {
  $("input[type='text']").fadeToggle();
});
