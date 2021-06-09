<!DOCTYPE html>
<html>

    <head>
        <title>Add Car Page</title>
        <link rel="stylesheet" href="../../style/sign/sign.css">
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
            
            
    
    
                <div class="forms">
                    <div >

                
                        <label for="PhoneNumber">Phone Number</label><br>
                        <input type="carPhoneNumber" type="tel" oninput="Update(this.value , 'carPhone')"; >
                        
                        
                        
                        <label for="Password">Password</label><br>
                        <div class="psw">
                            <input type="carPassword1" type="password"  oninput="Update(this.value , 'carPass1')"; >
                        </div>
                        
                        
                        
                        <input type="submit" value="add"  onclick="Add_car();" class="submit">
        
        
                    </div>  
                </div>
            </div>
        </section>

        <script >

            

        </script>

        <script src="https://www.gstatic.com/firebasejs/8.6.3/firebase-app.js"></script>

        <script src="https://www.gstatic.com/firebasejs/8.6.3/firebase-analytics.js"></script>

        <script src="https://www.gstatic.com/firebasejs/8.6.3/firebase-firestore.js"></script>
        
        <script src="https://www.gstatic.com/firebasejs/8.6.3/firebase-auth.js"></script>
        
        <script src="../../../server_side/dashboard/config.js"></script>

        <script src="../../../server_side/dashboard/variable.js"></script>

        <script src="../../../server_side/dashboard/update.js"></script>

        <script src="../../../server_side/dashboard/add_car.js"></script>


    </body>

</html>