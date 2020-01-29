//#region déclaration des classes
class Vehicule {
    constructor(name){
        this.name = name || "vehicule";
    }
}

class Voiture extends Vehicule {
    constructor(name) {
        super(name || "voiture");
        this.roues = 4;
        this.portes = 5;
        this.moteur = {
            puissance : 60,
            marche : false
        };
        this.voyants = {
            marche : false
        }
    }
    contact() {
        console.log("on allume le contact");
        this.allumerLesVoyants();
    }
    allumerLesVoyants() {
        console.log("les voyants s'allument");
        this.voyants.marche = true;
    }
    demarre() {
        console.log("démarre le moteur");
        this.moteur.marche = true;
    }
    decontact() {
        console.log("on coupe le contact");
        this.eteindreLesVoyants();
    }
    eteindreLesVoyants() {
        console.log("les voyants s'éteignent");
        this.voyants.marche = false;
    }
    coupe() {
        console.log("on coupe le moteur");
        this.moteur.marche = false;
    }
}

class Sportive extends Voiture {
    constructor(name) {
        super(name || "sportive");
        this.portes = 3;
        this.moteur.puissance = 450;
    }
}

class Velo extends Vehicule {
    constructor(name){
        super(name || "velo");
        this.roues = 2;
    }
}

class Camion extends Voiture {
    constructor(name){
        super(name || "camion");
        this.portes = 3;
        this.moteur.puissance = 500;
        this.roues = 6;
    }
}
//#endregion

const test_voiture = () => {
    console.log("test vehicule");
    let maVoiture = new Sportive("Ma sportive");
    let maVoiture2 = new Voiture("Ma voiture");
    let maVoiture3 = new Vehicule("Mon vehicule");
    maVoiture.contact();
    maVoiture.demarre();
    console.log(maVoiture.name);
    console.log(maVoiture2.name);
    console.log(maVoiture3.name);

    let usine = [];
    for (let i = 0; i < 10000; i++) usine.push(new Sportive());
    console.log(usine);
};
