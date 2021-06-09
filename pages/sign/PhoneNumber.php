<html>
<head>
    <title>Phone Number Authentication with Firebase Web</title>
</head>
<body>
<h1>Enter number to create account</h1>
<form>
    <input type="text" id="number">
    <script>
      document.getElementById('number').value = localStorage.getItem('textvalue');
      phoneNumber = localStorage.getItem('textvalue');
    </script>
    <div id="recaptcha-container"></div>
    <button type="button" onclick="phoneAuth();">SendCode</button>
</form><br>
<h1>Enter Verification code</h1>
<form>
    <input type="text" id="verificationCode" placeholder="Enter verification code">
    <button type="button" onclick="codeverify();">Verify code</button>

</form>



<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.6.4/firebase.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->

<script>
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDteONxAhfmva5yDgxgxebjIP4je5IHVbI",
    authDomain: "tracking-d23da.firebaseapp.com",
    databaseURL: "https://tracking-d23da-default-rtdb.firebaseio.com",
    projectId: "tracking-d23da",
    storageBucket: "tracking-d23da.appspot.com",
    messagingSenderId: "542283883500",
    appId: "1:542283883500:web:6ed68882a824cd095dd6c9",
    measurementId: "G-W4V9Z4H5H4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>


<script src="../../../server_side/sign/NumberAuthentication.js" type="text/javascript"></script>
<script src="../../../server_side/sign/variables.js"></script>

</body>
</html>