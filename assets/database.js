// all global variables required from the database:

    
    var facialDisgust;
    var facialFear;
    var facialHappiness;
    var facialNeutral;
    var facialSadness;
    var facialSurprise;

// console.log('here', firebase)

// submitt data to firebase database on click
    
    $('#submitButton').click(function () {
        event.preventDefault();
        var firstNameVar = $("#firstName").val();
        var lastNameVar = $("#lastName").val();
        var userNameVar = $("#userName").val();
        var facialExpression = facialRecognitionJson;

// console.log('clicked ', firstNameVar, lastNameVar, userNameVar)
        firebase.database().ref('users/').set({
            firstname: firstNameVar,
            lastname: lastNameVar,
            username: userNameVar,
            facialInfo: facialExpression
        });
    });
   
// reading stuff from the database:

readData();

    function readData() {
        return firebase.database().ref('/users/').once('value').then(function (snapshot) {
            var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
            var facialInfo = (snapshot.val() && snapshot.val().facialInfo) || "Anonymous";
            // json parsed
            var parsedFacial = JSON.parse(facialInfo);
            console.log(parsedFacial);

            

            facialDisgust = parsedFacial.disgust;

            console.log(facialDisgust)

            facialFear = parsedFacial.fear;
            facialHappiness = parsedFacial.happiness;
            facialNeutral = parsedFacial.neutral;
            facialSadness = parsedFacial.sadness;
            facialSurprise = parsedFacial.surprise; 
            
            //console.log(facialInfo."sadness");
        });

    }



console.log(facialDisgust);
console.log(facialFear);
console.log(facialHappiness);
console.log(facialNeutral);
console.log(facialSadness);
console.log(facialSurprise);

$('.fb-login-button').click(()=> console.log('here'))