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


let array [q3,i20n,sportback,espace,c208]


let q3 = {
    marque : "Audi",
    kilomètre : 108903,    
}
let q3exp = JSON.stringify(q3);
localStorage.setItem ("voiture", q3);



let i20n = {
    marque : "Hundai",
    kilomètre : 180903,    
}
let i20nexp = JSON.stringify(i20n);
localStorage.setItem ("voiture", i20n);



let sportback = {
    marque : "Audi",
    kilomètre : 208903,    
}
let sportbackesp = JSON.stringify(sportback);
localStorage.setItem ("voiture", sportback);



let espace = {
    marque : "Renaud",
    kilomètre : 398903,    
}
let espaceexp = JSON.stringify(espace);
localStorage.setItem ("voiture", espace);



let c208 = {
    marque : "Peugeot",
    kilomètre : 50903,    
}
let c208exp = JSON.stringify(c208);
localStorage.setItem ("voiture", c208);
