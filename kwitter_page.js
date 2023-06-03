
var firebaseConfig = {
    apiKey: "AIzaSyAgUsNoJonLjRHfdcTPG6BMo2zpuYXlM08",
    authDomain: "kwitter-dd798.firebaseapp.com",
    databaseURL: "https://kwitter-dd798-default-rtdb.firebaseio.com",
    projectId: "kwitter-dd798",
    storageBucket: "kwitter-dd798.appspot.com",
    messagingSenderId: "574612250981",
    appId: "1:574612250981:web:2aca1d0e0f44aa7a50c18c"
  };
  
  
  firebase.initializeApp(firebaseConfig);

  var username=localStorage.getItem("username");
  var roomname=localStorage.getItem("roomname");
  function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(roomname).push({
          name:username,
          message:msg,
          likes:0
    });
    document.getElementById("msg").value="";
  }


function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;


    } });  }); }
getData();
