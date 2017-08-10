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
    $("#btnPooping").addClass('btnActive');
    
     $("#btnPooping").click(function(){
        $(".keuzePooping").show();
        $(".keuzeRunning").hide();        
        $(".keuzeSwimming").hide();
        $(".keuzeAchievements").hide();
         
        $("#btnPooping").addClass('btnActive');
        $("#btnRunning").removeClass('btnActive');
        $("#btnSwimming").removeClass('btnActive');
        $("#btnAchievements").removeClass('btnActive');
         
        $('html').css({background : 'url("../img/pooping_m.jpg") no-repeat center center'}); 
    });   
    
    $("#btnRunning").click(function(){
       
        $(".keuzePooping").hide();
        $(".keuzeRunning").show();        
        $(".keuzeSwimming").hide();
        $(".keuzeAchievements").hide();    
        
        $("#btnPooping").removeClass('btnActive');
        $("#btnRunning").addClass('btnActive');
        $("#btnSwimming").removeClass('btnActive');
        $("#btnAchievements").removeClass('btnActive');
        
        $('html').css({background : 'url("../img/running_m.jpg") no-repeat center'}); 
        
        
    });   
    
    $("#btnSwimming").click(function(){
        $(".keuzePooping").hide();
        $(".keuzeRunning").hide();        
        $(".keuzeSwimming").show();
        $(".keuzeAchievements").hide();
        
        $("#btnPooping").removeClass('btnActive');
        $("#btnRunning").removeClass('btnActive');
        $("#btnSwimming").addClass('btnActive');
        $("#btnAchievements").removeClass('btnActive');
        
        $('html').css({background : 'url("../img/swimming_m.jpg") no-repeat center'});
    });
    
     $("#btnAchievements").click(function(){
        $(".keuzePooping").hide();
        $(".keuzeRunning").hide();        
        $(".keuzeSwimming").hide();
        $(".keuzeAchievements").show();
         
        $("#btnPooping").removeClass('btnActive');
        $("#btnRunning").removeClass('btnActive');
        $("#btnSwimming").removeClass('btnActive');
        $("#btnAchievements").addClass('btnActive');
         
        $('html').css({background : 'url("../img/achievements_m.jpg") no-repeat center'});
    });   



};
$(document).ready(function () {


     if ((screen.width>900)) {
    // if screen size is 1025px wide or larger
    $(".keuzemenu").hide(); // you can also use $(".yourClass").hide(); 
    $(".keuzemenuWeb").show();

};

if((screen.width<=900)){
    $(".keuzemenu").show();
    $(".keuzemenuWeb").hide();
    $('html').css({background : 'url("../img/pooping_m.jpg") no-repeat center center'}); 
};
    
});




