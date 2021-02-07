/* becode/javascript
 *
 * /09-misc/06-guess-number/script.js - 9.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    
    
    var section = document.querySelector('section');
    
    // Création de la variable de retour d'informations
    
    var report = document.createElement("p");
    
    report.textContent = "Il vous reste : 5 vies."
    
    report.setAttribute("id","report");
    
    section.appendChild(report)
    
    
    // Création d'un bouton pour jouer
    
    var play = document.createElement("button");
    
    play.textContent = "Nouvelle tentative "
    
    play.setAttribute("id","play");
    
    section.appendChild(play)
    
    
    
    // Création d'un nombre aléatoire
    
    
    var randInt = Math.floor(Math.random() * Math.floor(100));
    
    // Cheat mode
    console.log(randInt)
    
    var life = 5;
    
    
    // gestion du jeu
    
    
    play.addEventListener("click",function game(e){
        
        // Le joueur à perdu car plus de vies disponibles.
        
        if (life === 0)
            {
              
                  
                play.removeEventListener("click",game);
                report.textContent = " Perdu ... Rechargez la page pour rejouer.";
              
            }
        
        
        
        // Récupération des données à évaluer
        
        var userInt = prompt(" Désigné un nombre compris entre 1 et 100 : ")
        
        userInt = Number(userInt);
        
        // Evaluation des données
        
        
        // Le joueur à trouver le nombre et remporte la partie
        if (userInt === randInt)
            {
                play.removeEventListener("click",game);
                report.textContent = "Vous avez gagnez ! Mon nombre était : " + String(randInt);
            }
        
        // Le nombre du joueur est inférieur le joueur perd une vie
        if(userInt < randInt)
            {
                life--; 
                report.textContent = String(userInt)+ " est inférieur à mon nombre, il vous reste : " + String(life) + " vies."
            }
        
        // Le nombre du joueur est supérieur le joueur perd une vie
        if(userInt > randInt)
            {
                life--; 
                report.textContent = String(userInt)+ " est supérieur à mon nombre, il vous reste : " + String(life) + " vies."
            }
        
        
        
        
        
    })
    
})();
