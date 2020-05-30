var modal = document.getElementsByClassName("modal");

var b= document.getElementsByClassName("close");

for(var i=0;i<b.length;i++){
b[i].onclick = function(){
for(var j=0;j<modal.length;j++){
modal[j].style.display = "none";
        }
    }
}
function disp(loc){
  modal[loc].style.display = "block";
  }

  function nodisp(loc){
    modal[loc].style.display = "none";
    }

    function me(){
      nodisp(0);
      setTimeout(function(){ disp(1); }, 700);
      }

function show_service(){
  document.getElementById("ser_load").style.display = "block";
  setTimeout(function(){
    document.getElementById("ser_load").style.display = "none";
    document.getElementById("service_layout").style.display = "block";
  },2000)
}