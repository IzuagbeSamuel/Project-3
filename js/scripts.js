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

  
  $("#ans5").change(function(){
    $("#Q5").hide();
    $("#Q6").show();
  })

  
  $("#ans6").change(function(){
    $("#Q6").hide();
    $("#Q7").show();
  })

  
  $("#ans7").change(function(){
    $("#Q7").hide();
    $("#Q8").show();
  })

  
  $("#ans8").change(function(){
    $("#Q8").hide();
    $("#form").show();
  })

  $("#form").submit(function(event){
   
    const questionOne = $("input[name ='naruto']:checked").val();
    const questionTwo = $("input[name = 'naruto']:checked").val();
    const questionThree = $("input[name = 'naruto']:checked").val();
    const questionFour = $("input[name = 'naruto']:checked").val();
    const questionFive = $("input[name = 'naruto']:checked").val();
    const questionSix = $("input[name = 'naruto']:checked").val();
    const questionSeven = $("input[name = 'naruto']:checked").val();
    const questionEight = $("input[name = 'naruto']:checked").val();
    if (questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven, questionEight) {
      $("#uzumaki").show();
      $("#form").hide();
    }

    const quesOne = $("input[name ='deku']:checked").val();
    const quesTwo = $("input[name = 'deku']:checked").val();
    const quesThree = $("input[name = 'deku']:checked").val();
    const quesFour = $("input[name = 'deku']:checked").val();
    const quesFive = $("input[name = 'deku']:checked").val();
    const quesSix = $("input[name = 'deku']:checked").val();
    const quesSeven = $("input[name = 'deku']:checked").val();
    const quesEight = $("input[name = 'deku']:checked").val();
    if (quesOne, quesTwo, quesThree, quesFour, quesFive, quesSix, quesSeven, quesEight) {
      $("#midoria").show();
      $("#form").hide();
    }

    const queOne = $("input[name ='saitama']:checked").val();
    const queTwo = $("input[name = 'saitama']:checked").val();
    const queThree = $("input[name = 'saitama']:checked").val();
    const queFour = $("input[name = 'saitama']:checked").val();
    const queFive = $("input[name = 'saitama']:checked").val();
    const queSix = $("input[name = 'saitama']:checked").val();
    const queSeven = $("input[name = 'saitama']:checked").val();
    const queEight = $("input[name = 'saitama']:checked").val();
    if (queOne, queTwo, queThree, queFour, queFive, queSix, queSeven, queEight) {
      $("#saitama").show();
      $("#form").hide();
    }


    event.preventDefault();
  })
})
