$(document).ready(function(){
    
  $(".mead h1").slideToggle(2000).delay(10000);  
    
    
$(".second .ek").mouseenter(function(){
 $(".ek i").show(9000); 
 $(".ek h1").show(7000); 
     $(".silo").hide(5000);
});
$(".dui").mouseenter(function(){
 $(".dui i").show(9000);  
     $(".dui h1").show(7000);
     $(".silo").hide(5000); 
});
    $(".tin").mouseenter(function(){
 $(".tin i").show(9000);  
     $(".tin h1").show(7000);
     $(".silo").hide(5000); 
});


   $(".second .ek").mouseleave(function(){
 $(".ek i").hide(9000); 
 $(".ek h1").hide(7000); 
 $(".silo").show(5000); 

}); 
       $(".second .dui").mouseleave(function(){
 $(".dui i").hide(9000); 
 $(".dui h1").hide(7000); 
$(".silo").show(5000); 

}); 

       $(".second .tin").mouseleave(function(){
 $(".tin i").hide(9000); 
 $(".tin h1").hide(7000); 
  $(".silo").show(5000); 
}); 

    

    
 $(".three").hover(function(){
$(".three_right").fadeIn(1000);     
 });
 
 $(".three").mouseleave(function(){
$(".three_right").fadeOut(50000);     
 });
    
    
 

$(".container input").focus(function(){
   $(this).css("background-color","#4656A1");
});
    
$(".container input").blur(function(){
   $(this).css("background-color","#283774"); 
}); 
    
    

    
    
});







