let jours = ["lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"];


for (const jour of jours) {
    let aussi = jour === "Dimanche" ? "aussi" : "" ;
    console.table(` ${jour}, des patates ${aussi}`); 
}