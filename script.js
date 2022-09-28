const tCheck = document.getElementById('container')

console.log (tCheck)






const newText = document.createElement("div");

let essai = document.getElementById("container");

essai.appendChild(newText);

newText.innerHTML = ("<p>Nouvel objet</p>")







const newT= document.createElement("div");

essai.appendChild(newT);

newT.innerHTML = ("<p>test 2</p>");







let suivi = 0;

const bouton = document.getElementById("btn");
bouton.addEventListener("click", function() {

suivi = suivi + 1
console.log ("Tu as cliqué ! " + suivi)
});






localStorage.setItem ("prenom", "Thomas");



