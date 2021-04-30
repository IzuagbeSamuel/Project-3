$(document).ready(function(){
  $("#btn").click(function(){
   $("#showcase").hide();
   $("#Q1").show();
  })

  $("#btn2").click(function(){
    $("#Q1").hide();
    $("#Q2").show();
  })

  $("#btn3").click(function(){
    $("#Q2").hide();
    $("#Q3").show();
  })
})