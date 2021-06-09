<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Settings</title>
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css">
    <!-- Google Fonts -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap">
    <!-- Bootstrap core CSS -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet">
    <!-- Material Design Bootstrap -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.19.1/css/mdb.min.css" rel="stylesheet">
</head>

<body class="bg-light">
    <div class="container">
        <div class="row d-flex justify-content-center">
            <div class="col-md-10 mt-5 pt-5">
                <div class="row z-depth-3">
                    <div class="col-sm-4 bg-info rounded-left">
                        <div class="card-block text-center text-white">
                            <i class="fas  fa-user-tie fa-7x mt-5"></i>
                            <h2 class="font-weight-bold mt-4">Firstname</h2>
                            <p>Driver</p>
                            <i class="far fa-edit fa-2x mt-4"></i>
                        </div>
                    </div>
                    <div class="col-sm-8 bg-white rounded-right">
                        <h3 class="mt-3 text-center">Information</h3>
                        <hr class="badge-primary mt-0 w-25">
                        <div class="row">
                            <div class="col-sm-6">
                                <p class="font-weight-bold">Firstname :</p>
                                <input class="text-muted"  id="firstnameSetting">
                            </div>

                            <div class="col-sm-6">
                                <p class="font-weight-bold">Lastname :</p>
                                <input  class="text-muted"  id="surnameSetting">
                            </div>

                            <div class="col-sm-6">
                                <p class="font-weight-bold">Phone :</p>
                                <input class="text-muted"  id="phoneSetting">
                            </div>
                        </div>
                        <h4 class="mt-3">Security Information</h4>
                        <hr class="bg-primary">
                        <div class="row">
                            <div class="col-sm-6">
                                <p class="font-weight-bold">Password :</p>
                                <input class="text-muted"  id="passwordSetting">
                            </div>


                            <div class="col-sm-6">
                                <p class="font-weight-bold">Email address :</p>
                                <input class="text-muted" value="harchaoui@esi.dz" id="emailSetting">
                            </div>

                        </div>
                        <hr class="bg-primary">
                        <ul class="list-unstyled d-flex justify-content-center mt-4">
                            <!--<li><a href="#"><i class="fab fa-facebook-f px-3 h4 text-info"></i></a></li>
                            <li><a href="#"><i class="fab fa-youtube px-3 h4 text-info"></i></a></li>
                            <li><a href="#"><i class="fab fa-twitter px-3 h4 text-info"></i></a></li>-->
                            <input class="col-sm-6" type="submit" value="save modifications" onclick="Update_Fields_inDocument();">
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="https://www.gstatic.com/firebasejs/8.6.3/firebase-app.js"></script>

    <script src="https://www.gstatic.com/firebasejs/8.6.3/firebase-analytics.js"></script>
        
    <script src="https://www.gstatic.com/firebasejs/8.6.3/firebase-firestore.js"></script>
        
    <script src="https://www.gstatic.com/firebasejs/8.6.3/firebase-auth.js"></script>
        
    <script src="../../../server_side/dashboard/config.js"></script>

    <script src="../../../server_side/dashboard/variables.js"></script>

    <script src="../../../server_side/dashboard/user_data.js"></script>

    <script src="../../../server_side/dashboard/user_update.js"></script>
</body>

</html>