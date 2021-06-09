<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../../style/sign/sign.css">
    <title>Start tracking !</title>
</head>

<body>

    


    <section class="intro">
        <img class="logo" src="" alt="our logo">
        <h1>Easy & fast<br>continous tracking</h1>
        <img id="illust" src="" alt="intro-img">
    </section>









    <section class="form">



        <div id="title">
            <img class="logo" src="" alt="our logo">
            <h1>Easy & fast<br>continous tracking</h1>
        </div>
    

    
        <div class="card">
        
        

            <div class="buttons">
                <div id="background-btn"></div>
                <button id="sign-in">sign in</button>
                <button id="sign-up">sign up</button>
            </div>
        


            <div class="forms">
                <div id="formSignUp">



                    <ul class="profil">
                        <li>
                            <label for="firstName" required>First Name</label><br>
                            <input type="firstName" type="text" oninput="Update(this.value , 'fname')"; name="firstName">
                       </li>
    
                        <li>
                            <label for="surName" required>Surname</label><br>
                            <input type="surName" type="text" oninput="Update(this.value , 'sname')"; name="surName">
                       </li>
                   </ul>

    
                    
                    <label for="phoneNumber">Phone Number</label><br>
                    <input type="phoneNumber" type="tel" oninput="Update(this.value , 'phone')";  name="phoneNumber" >
    
    

                    <label for="password">Password</label><br>
                    <div class="psw">
                        <input type="password1" type="password"  oninput="Update(this.value , 'pass1')";  name="password">
                        <img src="../../assets/icons/view.svg" alt="visibility" class="eye" id="eye1">
                    </div>
                    <label for="confirmPassword">Confirm password</label><br>
                    <div class="psw">
                        <input type="password2" type="password" oninput="Update(this.value , 'pass2')";  name="password2">
                        <img src="../../assets/icons/view.svg" alt="visibility" class="eye" id="eye2">
                    </div>
                

                
                    <div class="controle-errors">
                        <p>Seems good, we suggest to make it stonger!</p>
                        <ul>
                            <li id="controls_uppercase">Contains at least 2 uppercase</li>
                            <li id="controls_digits">Contains at least 2 digets</li>
                            <li id="controls_special_char">Contains at least 2 special characters</li>
                            <li id="controls_length">Contains at least 8 characters</li>
                            <li id="controls_equal">passwords are equals</li>
                        </ul>
                    </div>



                    <input type="submit" value="let's go" id="sign_up_btn" class="submit">



                </div>



                <div id="formSignIn">

                
                    <label for="phoneNumber">Phone Number</label><br>
                    <input type="phoneNumber2" type="tel" oninput="Update(this.value , 'phone2')";>
                    
                    
                    
                    <label for="password">Password</label><br>
                    <div class="psw">
                        <input type="password3" type="password" oninput="Update(this.value , 'pass3')";> 
                        <img src="../../assets/icons/view.svg" alt="visibility" class="eye " id="eye3">
                    </div>
                    
                    
                    
                    <input type="submit" value="Log in"  id="sign_in_btn" class="submit">
    
    
                </div>                   


            </div>



            <button id="sign-google">
                <ul>
                    <li>
                        <img src="../../assets/icons/google.svg" alt="google">
                    </li>
                    <li id="mssg-google">Sign Up With Google</li>
                </ul>
            </button>
                       
        </div>




    </section>











    
                        



    <script src="../../scripts/signScripts.js"></script>

    <script src="https://www.gstatic.com/firebasejs/8.6.3/firebase-app.js"></script>

    <script src="https://www.gstatic.com/firebasejs/8.6.3/firebase-analytics.js"></script>
        
    <script src="https://www.gstatic.com/firebasejs/8.6.3/firebase-firestore.js"></script>
        
    <script src="https://www.gstatic.com/firebasejs/8.6.3/firebase-auth.js"></script>
        
    <script src="../../../server_side/sign/config.js"></script>
        
    <script src="../../../server_side/sign/variables.js"></script>
        
    <script src="../../../server_side/sign/input_update.js"></script>
    
    <script src="../../../server_side/sign/sign_up.js"></script>
        
    <script src="../../../server_side/sign/sign_in.js"></script>

</body>

</html>