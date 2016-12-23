window.onload = function () {
(function () {
    // Initialize Firebase
    const config = {
        apiKey: "AIzaSyAMIyTIAeNJJU8V8nz-QqdxV5LxRISUvYQ",
        authDomain: "gopodog-1480587531034.firebaseapp.com",
        databaseURL: "https://gopodog-1480587531034.firebaseio.com",
        storageBucket: "gopodog-1480587531034.appspot.com",
        messagingSenderId: "508782445517"
    };
    firebase.initializeApp(config);

    //get elements
    const txtEmail=document.querySelector('#txtEmail');
    const txtPassword=document.querySelector('#txtPassword');
    const btnLogin=document.querySelector('#btnLogin');
    const btnSignUp=document.querySelector('#btnSignup');
    const btnLogOut=document.querySelector('#btnLogout');
    const btnLoginToPage=document.querySelector('#btnLoginToPage');
    const btnRegisterToPage=document.querySelector('#btnSignupToPage');
    
   var input = $( ":button" );
    console.log(input.length);

    if(btnLoginToPage!=null){
            btnLoginToPage.addEventListener('click',function(){

            document.location.href = "../user/login.html";
        });
    };

    if(btnRegisterToPage!=null)
    {
        btnRegisterToPage.addEventListener('click',function(){

        document.location.href = "../user/register.html";
        });
  };

    // add login event
   if(btnLogin!=null){
            btnLogin.addEventListener('click', function e() {
                 const txtEmail=document.querySelector('#txtEmail');
                
                const txtPassword=document.querySelector('#txtPassword');
                
                //get email and password
                const email=txtEmail.value;
                const pass=txtPassword.value;
               
                
                
                firebase.auth().signInWithEmailAndPassword(email, pass).catch(function(error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errorCode);
                    console.log(errorMessage);
                    // ...
                });
            });
        };

   //signup event
    if(btnSignUp!=null){
            btnSignUp.addEventListener('click',function e(){
                //get email and password
                var GetEmail=document.querySelector('#txtEmailRegister');
                var passRegister=document.querySelector('#txtPasswordRegister');
                console.log("register is clicked");
                
                var EmailString=GetEmail.value;
                var passwordRegisterString=passRegister.value;
                
                firebase.auth().createUserWithEmailAndPassword(EmailString, passwordRegisterString).catch(function(error) {
                    // Handle Errors here.

                    console.log(errorCode);
                    console.log(errorMessage);
                    // ...
                });

            });
        };
    
    var logOutButtonNav=document.querySelector('#btnLogout');
    if(logOutButtonNav!=null)
        {
            logOutButtonNav.addEventListener('click',function (){
                firebase.auth().signOut();    
                console.log("yattaaa");
            })
            
        };
    
   /* var logoutNav=document.querySelector('#btnLogout');
      
        if(logoutNav!=null){
            
            logoutNav.addEventListener('click',function (){
            firebase.auth().signOut();    
            console.log("log out nav is clicked");
              });
            
            };
    
            if(btnLogOut!=null){       
              btnLogOut.addEventListener('click',function e(){
                  firebase.auth().signOut();
                  console.log("user logged out");


              });
            } ;*/
        
    var user = firebase.auth().currentUser;
    var loggedin=0;
    var hideLogin=document.querySelector('.loginFields');
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            console.log("User logged in "+ user);
            
            console.log("loggedin: "+loggedin);
            //document.location.href = "../running/index.html";
            hideLogin.classList.add('hide');

        } else {
            // No user is signed in.
           console.log("User is NOT logged in");
            loggedin=2;
        }
        

    });
    





}());
};

