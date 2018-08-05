// global variables
var facebookUniqueID = 0;
var timeNow = moment().valueOf();

// returns unique user id upon signing in

        window.fbAsyncInit = function () {
            FB.init({
                appId: '257318994871662',
                cookie: true,
                xfbml: true,
                version: 'v3.1'
            });


        FB.getLoginStatus(function (response) {
            statusChangeCallback(response);
        });

    };

        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) { return ; }
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    function statusChangeCallback(response) {
        console.log('here ', response)
            if (response.status === "connected"){
            console.log("you are logged in!");
            console.log(response)
            console.log(response.authResponse.userID)
            facebookUniqueID = response.authResponse.userID;
            loggedIn(response.authResponse.userID);
            } else {
            console.log("you are not authenticated");
        loggedOut();
    }
}

    // logged in function
    function loggedIn(userIdentifier) {
            $("#mainContainer").text("you are user number: " + userIdentifier + " and this is the main Div. All the API's and every thing else that is related to you would be displayed here on this div")
        }
    // logged out function
    function loggedOut(){
            $("#mainContainer").text("Please log in to see APIS and information related to you")
        }

    function checkLoginState() {
            FB.getLoginStatus(function (response) {
                statusChangeCallback(response);
            });
        }
        
// firebase to store image 

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCQoXBZAw4SteKOXhCHlWgmRcBJB5wnBkE",
        authDomain: "mooded-6e73b.firebaseapp.com",
        databaseURL: "https://mooded-6e73b.firebaseio.com",
        projectId: "mooded-6e73b",
        storageBucket: "mooded-6e73b.appspot.com",
        messagingSenderId: "207450857045"
    };
    firebase.initializeApp(config);

    var database = "firebase";

    // get elements
    var uploader = document.getElementById("uploader");
    var fileButton = document.getElementById("fileButton");

    //  Listen for file selection
    fileButton.addEventListener("change", function (e) {

        // Get File
        var file = e.target.files[0];

        // Create a storage ref
        var storageRef = firebase.storage().ref(facebookUniqueID + "/" + timeNow);

        // Upload File
        var task = storageRef.put(file);

        // Update progress bar
        task.on("state_changed",
            function progress(snapshot) {
                var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                uploader.value = percentage;
            },

            function error(err) {

            },

            function complete() {

            }
        );
    });
        

console.log(facebookUniqueID);