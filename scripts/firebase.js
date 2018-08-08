
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
        
$("#buttonClick").on("click", function() {
    var firstWord = $("#firstWord").val();
    var secondWord = $("#secondWord").val();
    var thirdWord = $("#thirdWord").val();
    var qoutesId = $("#qoutesId").prop('checked');
    var articlesId = $("#articlesId").prop('checked');
    var horoscopeId = $("#horoscopeId").prop('checked');
    var musicId = $("#musicId").prop('checked');
    var pornId = $("#pornId").prop('checked');
    var catsId = $("#catsId").prop('checked');
    var puppiesId = $("#puppiesId").prop('checked');
    
    firebase.database().ref("kanzbra_test").set({
        firstword: firstWord,
        secondword: secondWord,
        thirdword: thirdWord,
        qoutes: qoutesId,
        articlesid: articlesId,
        horoscopeid: horoscopeId,
        musicid: musicId,
        pornid: pornId,
        catsid: catsId,
        puppiesd: puppiesId,
    });
});
