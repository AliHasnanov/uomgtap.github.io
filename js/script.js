$(function(){
$('.menu').click(function(){
    $(".select-menu").slideToggle(300)
})
$("input[type='radio']").click(function(){
    var result = $(this).val();
    $(".select-menu").slideUp(300)
    if(result==4){
        $(".content-row.row-4").nextAll().hide(300)
    }
    else if(result==5){
        $(".content-row").last().hide(300)
    }
})
console.log($(".content-row[style='display:none']").length)
})