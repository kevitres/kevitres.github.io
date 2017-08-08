window.onload = function () {

    
$('#running').click(function(){    
document.location.href = "../running/index.html";
});
    
$('#pooping').click(function(){    
document.location.href = "../pooping/index.html";
});
    
$('#swimming').click(function(){    
document.location.href = "../swimming/index.html";
});    

$('#king').click(function(){    
document.location.href = "../achievements/index.html";
});
    
    $(".keuzeRunning, .keuzeSwimming, .keuzeAchievements").hide();
    
    
     $("#btnPooping").click(function(){
        $(".keuzePooping").show();
        $(".keuzeRunning").hide();        
        $(".keuzeSwimming").hide();
        $(".keuzeAchievements").hide();
    });   
    
    $("#btnRunning").click(function(){
       
        $(".keuzePooping").hide();
        $(".keuzeRunning").show();        
        $(".keuzeSwimming").hide();
        $(".keuzeAchievements").hide();    
        
        
        $('html').css({background : 'url("../img/background_running.jpg")'});
        
    });   
    
    $("#btnSwimming").click(function(){
        $(".keuzePooping").hide();
        $(".keuzeRunning").hide();        
        $(".keuzeSwimming").show();
        $(".keuzeAchievements").hide();
    });
    
     $("#btnAchievements").click(function(){
        $(".keuzePooping").hide();
        $(".keuzeRunning").hide();        
        $(".keuzeSwimming").hide();
        $(".keuzeAchievements").show();
    });   



};
$(document).ready(function () {
    $(".button-collapse").sideNav(); 

     
});





