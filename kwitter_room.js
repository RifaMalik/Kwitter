
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyBT8gFMrzXNNXUzYiyepaaKgrX2Y9PWRZY",
      authDomain: "kwitter-bd7fd.firebaseapp.com",
      databaseURL: "https://kwitter-bd7fd-default-rtdb.firebaseio.com",
      projectId: "kwitter-bd7fd",
      storageBucket: "kwitter-bd7fd.appspot.com",
      messagingSenderId: "881079332838",
      appId: "1:881079332838:web:61082010408cee3b65f027"
    };
    
    // Initialize Firebase
    //const app = initializeApp(firebaseConfig);
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="welcome "+user_name+"!";

    function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({purpose:"adding room name"});
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name- "+Room_names);
      row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code"
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

     function logout(){
      localStorage.removeItem="user_name";
      localStorage.removeItem="room_name";
      window.location="index.html";
     }
