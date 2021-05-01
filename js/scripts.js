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
   
    
    const questionSeven = $("input[name = 'naruto']:checked").val();
   
    if (questionSeven) {
      $("#uzumaki").show();
      $("#form").hide();
    }


    const quesTwo = $("input[name ='deku']:checked").val();
  
    if (quesTwo) {
      $("#midoria").show();
      $("#form").hide();
    }

   
    const queTwo = $("input[name = 'saitama']:checked").val();
    
    if (queTwo) {
      $("#saitama").show();
      $("#form").hide();
    }

  
    const quTwo = $("input[name = 'madara']:checked").val();
    
    if (quTwo) {
      $("#madara").show();
      $("#form").hide();
    }

  
    const qTwo = $("input[name = 'kirito']:checked").val();
   
    if (qTwo) {
      $("#kirito").show();
      $("#form").hide();
    }


    event.preventDefault();
  })
})
