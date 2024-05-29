
// ### Partie 1: Création de l'objet `p**ersonne**`

// - **Étape 1.1 :** Crée un objet **`personne`** avec les propriétés **`nom`**, **`prenom`**, **`age`**, et **`email`**.
// - **Étape 1.2 :** Ajoute une méthode **`afficherInfos`** à l'objet qui affiche toutes ses informations dans la console sous la forme : "`Nom: [nom], Prénom: [prenom], Âge: [age], Email: [email]`".


let personne1 = {
    nom:"DEDE",
    prenom:"Ruddy",
    age:45,
    email:"toto@email.com",
    afficherInfos: function(){
        console.log(`Nom : ${this.nom}, Prénom: ${this.prenom}, Âge: ${this.age}, Email: ${this.email} `)
    },
    miseAJourEmail: function(newEmail){
        this.email = newEmail
     }
}

let personne2 = {
    nom:"LALA",
    prenom:"Martine",
    age:68,
    email:"titi@email.com",
    afficherInfos: function(){
        console.log(`Nom : ${this.nom}, Prénom: ${this.prenom}, Âge: ${this.age}, Email: ${this.email} `)
    },
    miseAJourEmail: function(newEmail){
        this.email = newEmail
     }
}

let personne3 = {
    nom:"SMITH",
    prenom:"tata",
    age:25,
    email:"tata@email.com",
    afficherInfos: function(){
        console.log(`Nom : ${this.nom}, Prénom: ${this.prenom}, Âge: ${this.age}, Email: ${this.email} `)
    },
    miseAJourEmail: function(newEmail){
        this.email = newEmail
     }
}

personne1.age = 45

personne1.telephone = "+33549451622"

annuaire = [personne1,personne2,personne3]

function afficheAnnuaire(annuaire){
        for (const personne of annuaire) {
            personne.afficherInfos()
        }
}

function trouverPersonneParNom(nom, annuaire){
    for (const personne of annuaire) {
       if (personne.nom === nom) {
        personne.afficherInfos()
        
       }
    }
    
}

function filtrerPersonnesParAge (ageMini, ageMaxi, annuaire){
    let newAnnuaire = []
    for (const personne of annuaire) {
       if ((personne.age > ageMini) && (personne.age < ageMaxi)) {
            newAnnuaire.push(personne) 
       }
    }
    return newAnnuaire
}

// afficheAnnuaire(annuaire)

trouverPersonneParNom("SMITH",annuaire)
console.log(filtrerPersonnesParAge(44, 69, annuaire))




