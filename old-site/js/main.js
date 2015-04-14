  $(document).ready(function(){ 
    $(".study_image_01").click(function(){
      $(".study_02, .study_03, .study_04, .study_05, .study_06").hide(); 
      $(".study_01").show();  

    });

    $(".study_image_02").click(function(){
       $(".study_01, .study_03, .study_04, .study_05, .study_06").hide(); 
      $(".study_02").show();        
    });

    $(".study_image_03").click(function(){
       $(".study_01, .study_02, .study_04, .study_05, .study_06").hide(); 
      $(".study_03").show();        
    });


$(".study_image_04").click(function(){
       $(".study_01, .study_03, .study_02, .study_05, .study_06").hide(); 
      $(".study_04").show();        
    });


$(".study_image_05").click(function(){
       $(".study_01, .study_03, .study_04, .study_02, .study_06").hide(); 
      $(".study_05").show();        
    });


$(".study_image_06").click(function(){
       $(".study_01, .study_03, .study_04, .study_05, .study_02").hide(); 
      $(".study_06").show();        
    });



});
