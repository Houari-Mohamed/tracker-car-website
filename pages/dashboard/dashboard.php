<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../../style/dashbord/dashboard.css">
    <title>Dashboard</title>
</head>

<body>
    <script src="https://www.gstatic.com/firebasejs/8.6.3/firebase-app.js"></script>

    <script src="https://www.gstatic.com/firebasejs/8.6.3/firebase-analytics.js"></script>
        
    <script src="https://www.gstatic.com/firebasejs/8.6.3/firebase-firestore.js"></script>
        
    <script src="https://www.gstatic.com/firebasejs/8.6.3/firebase-auth.js"></script>
        

    <script src="../../../server_side/dashboard/variables.js"></script>
    
    <script src="../../../server_side/dashboard/car_options.js"></script>
    
    <script src="../../../server_side/dashboard/config.js"></script>
    
    <div class="side-menu">
        <ul>
            <li id="logo">our logo</li>
            <li>
                <ul id="functions">
                    <li>
                        <ul class="function slt">
                            <li><img src="../../assets/icons/dashboard-selected.svg" alt="dashboard"></li>
                            <li>Dashboard</li>
                        </ul>
                    </li>
                    <li>
                        <ul class="function">
                           <li>
                               <a href="./setting.php">
                                    <img src="../../assets/icons/settings.svg" alt="settings">
                               </a>
                           </li>
                            <li>Settings</li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li id="log-out">
                <a href="#">
                    Log out
                    <img src="../../assets/icons/exit.svg"  alt="log out" >
                </a>
            </li>
        </ul>
    </div>
    <div class="container">
        <div id="top-bar">
            <ul>
                <li>
                    <h1>Tracking Map</h1>
                </li>
                <li id="search-bar">
                    <input type="text" name="search" id="search" placeholder="Search">
                    <img src="../../assets/icons/loupe.svg" alt="search">
                </li>
            </ul>
        </div>

        <div>
            <input type="text" name="latitude" id="latitude" placeholder="Latitude">
            <br>
            <input type="text" name="longitude" id="longitude" placeholder="Longitude">
            <br>
            <input type="submit" value="search" onclick="searchCoordinates();">
        </div>


        <div id="map">
        <iframe width="1000" height="500" src="https://maps.google.com/maps?q=<?php echo "Alger";  ?>&output=embed">
        </iframe> 
        </div>
        <div id="car-details">
            <h3>Car details</h3>
            <div id="car-details-table">
                <table id="carDetails">
                    <script src="../../../server_side/dashboard/car_details.js"></script>
                </table>
            </div>
        </div>

        <div id="cars-list">
            <h3>List of cars</h3>
            <div id="table-extra-container">
                <div id="car-list-table">
                    <table id = "carsTable">
                        <thead>
                            <th>ID</th>
                            <th>Marque</th>
                            <th>Modele</th>
                            <th>Numero de telephone</th>
                            <th></th>
                        </thead>
                        <script src="../../../server_side/dashboard/car_list.js"></script>
                    </table>
                </div>
            </div>
        </div>
        <button id="car_page" onclick="addcar();">cars</button>
    </div>



    <script src="../../../server_side/dashboard/search.js"></script>

    <script src="../../../server_side/dashboard/select_car.js"></script>

    <script src="../../../server_side/dashboard/add_car.js"></script>

    <script src="../../../server_side/dashboard/main.js"></script>
        
</body>
</html>