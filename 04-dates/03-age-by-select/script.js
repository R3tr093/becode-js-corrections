/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


    

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    

        
        // lors du click sur le bouton run
    
        document.getElementById("run").addEventListener("click", () => {
        
     
          // On récupère différentes valeurs sélectionner par l'utilisateur
            
          let day = document.getElementById("dob-day").value;
    
          let month = document.getElementById("dob-month").value;

          let year = document.getElementById("dob-year").value;
    
            
          // On crée une date, et on stocke le jour, mois, année actuel    
          
          let date = new Date();

          let currentDay = date.getDate();
            
          let currentMonth = date.getMonth();
            
          let currentYear = date.getFullYear();

            
        // On compare les données récuperer pour déterminer l'age de l'utilisateur selon sa date de naissance et la date d'aujourd'hui.
            
         if (month > currentMonth)
             {
                 year++
             }

        if (month === currentMonth)
            {
                if (day > currentDay)
                    {
                        year++
                    }
            }

            
             alert(currentYear - year) 
        
        
    });
    
  
})();
