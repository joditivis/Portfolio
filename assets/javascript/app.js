var firebaseConfig = {
    apiKey: "AIzaSyDNcYL5F4Og-ReCGo8JwIi9-vJDvFQ_fX0",
    authDomain: "portfolio-573b2.firebaseapp.com",
    databaseURL: "https://portfolio-573b2.firebaseio.com",
    projectId: "portfolio-573b2",
    storageBucket: "portfolio-573b2.appspot.com",
    messagingSenderId: "733699835847",
    appId: "1:733699835847:web:08cf31e0f573799f83fbe2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// variable to reference the database
var database = firebase.database();

// initial values
var name = "";
var email = "";
var message = "";

// captures button click for submit button
$("#submit").on("click", function(event) {
    event.preventDefault();

    // grabs user input
    name = $("#contactname").val().trim();
    email = $("#email").val().trim();
    message = $("#contactMessage").val();

    // pushing information to database
    database.ref().push({
        name: name,
        email: email,
        message: message,
    });

    // empties form after user clicks submit
    $("#contactname").val("");
    $("#email").val("");
    $("#contactMessage").val("");

    var thankYouMsg = $("#thank-you-msg");
    thankYouMsg.append("Thank you! I am looking forward to connecting!");
});

database.ref().on("child_added", function(snapshot) {

  console.log(snapshot.val());

}, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
});

//***** Slick Carousel *****
$('.gallery-responsive').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });