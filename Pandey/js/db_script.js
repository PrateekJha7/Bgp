var firebaseConfig = {
    apiKey: "AIzaSyArhUT8nksK7JPRqQQTOFcu6Ja2KEfVuWE",
    authDomain: "glintt.firebaseapp.com",
    databaseURL: "https://glintt.firebaseio.com",
    projectId: "glintt",
    storageBucket: "glintt.appspot.com",
    messagingSenderId: "734011118725",
    appId: "1:734011118725:web:15a747fce14c0e32d085ec",
    measurementId: "G-N3T4W9Y98T"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  
  var db = firebase.firestore();


  function get_name(name){
    var content = '<div>'
    var count = 0;
    document.getElementById("service_name_db").innerHTML = name;
    document.getElementById("sub_service").innerHTML = " ";
        document.getElementById("load_ser").style.display = "block";
    disp(0);
    db.collection("SUB_SERVICE").where("SERVICE_TYPE", "==", name)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          count++;
          a =  doc.data()["SUB_SERVICE_NAME"];
          b =  doc.data()["PRICE"];
          c =  doc.data()["MAX_QUANTITY"];
          content += '<p>'+a+'-'+b+'-'+c+'</p>'
        });
        content += '</div>'
        if(count == 0){
          document.getElementById("load_ser").style.display = "none";
          document.getElementById("sub_service").innerHTML = "<center><p>No content here, Please try Again</p></center>";
        }
        else{
          document.getElementById("sub_service").innerHTML = content;
        }
        document.getElementById("load_ser").style.display = "none";
    })
    .catch(function(error) {
      document.getElementById("sub_service").innerHTML = "<center><p>Slow Internet Detected Please Try Again</p></center>";
    });
  }

