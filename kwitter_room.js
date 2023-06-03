
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyAgUsNoJonLjRHfdcTPG6BMo2zpuYXlM08",
    authDomain: "kwitter-dd798.firebaseapp.com",
    databaseURL: "https://kwitter-dd798-default-rtdb.firebaseio.com",
    projectId: "kwitter-dd798",
    storageBucket: "kwitter-dd798.appspot.com",
    messagingSenderId: "574612250981",
    appId: "1:574612250981:web:2aca1d0e0f44aa7a50c18c"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var username=localStorage.getItem("username");
  document.getElementById("username").innerHTML="Welcome "+username+" !";

  function addroom(){
    var roomname=document.getElementById("roomname").value;
    firebase.database().ref("/").child(roomname).update({
          purpose:"adding room name"
    });
    localStorage.setItem("roomname",roomname);
    window.location="kwitter_page.html";
  }

  


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name- "+Room_names);
    row="<div class='room_name' id="+Room_names+" onclick='redirect(this.id)'>#"+Room_names+"</div><hr>"
    document.getElementById("output").innerHTML+=row;

    //End code
    });});}
getData();

function redirect(name){
localStorage.setItem("roomname",name);
window.location="kwitter_page.html";
}

function logout(){
  localStorage.removeItem("username");
  localStorage.removeItem("roomname");
  window.location="index.html";
}
