var mot;
var motJoueur;
var entry;
function init(){
    //nouvelle_partie();
    loadDoc();
  }

function loadDoc() {



    $.get('liste_francais.txt', function(data) {
      var lines = data.split("\n");
      console.log("le")
    });



}


function nouvelle_partie(){
   var nb  = Math.floor(Math.random() * 101);
   temp = temp.toUpperCase();
   mot = temp.split("");
   var  t =  document.getElementById('mot_recherche');

   for (var i = 0; i < mot.length; i++) {
     var para = document.createElement("span");
     var node = document.createTextNode(" ? ");
     para.appendChild(node);
     para.setAttribute("id",i);
     t.appendChild(para);
   }

   var keys = document.getElementById('clavier');

   for(var i = 65; i<91;i++){
     var key = document.createElement("button");
     var t = document.createTextNode(String.fromCharCode(i));
     key.setAttribute("onclick","ajouteLettre(this);");
     key.appendChild(t);
     keys.appendChild(key)
   }
}

function ajouteLettre(button){
  var mot = document.getElementById('mot_recherche');
  var lettre = button.value;


}


function estTermine(){
  var i = 0;
  while(i < mot.length && mot[i] == motJoueur[i] ){
    i++;
  }
  return i == mot.length+1;
}
