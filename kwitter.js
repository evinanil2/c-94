var firebaseConfig = {
    apiKey: "AIzaSyBLT3kWl70rwetv_qKJC6aMfBFMQLW79Bo",
    authDomain: "kwitter-33114.firebaseapp.com",
    databaseURL: "https://kwitter-33114-default-rtdb.firebaseio.com",
    projectId: "kwitter-33114",
    storageBucket: "kwitter-33114.appspot.com",
    messagingSenderId: "857943760944",
    appId: "1:857943760944:web:c410c9c40a0a1d03d44df5"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addroom()
{
    user_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room"
    });

    
}