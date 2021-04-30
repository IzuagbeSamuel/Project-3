$(document).ready(function(){
  $("#btn").click(function(){
   $("#showcase").hide();
   $("#Q1").show();
  })

  $("#ans1").change(function(){
    $("#Q1").hide();
    $("#Q2").show();
  })

  $("#ans2").change(function(){
    $("#Q2").hide();
    $("#Q3").show();
  })

  $("#ans3").change(function(){
    $("#Q3").hide();
    $("#Q4").show();
  })

  $("#ans4").change(function(){
    $("#Q4").hide();
    $("#Q5").show();
  })
})