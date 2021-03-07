class Personnage { //this : objet courant
    constructor(pseudo, classe, sante, attaque) { //PROPRIETES
      this.pseudo     = pseudo;
      this.classe     = classe; //magicien ou guerrier
      this.sante      = sante;
      this.attaque    = attaque;
      this.niveau     = 1; //initialiser directement à 1
    }
    
    get informations() { //On crée un "GETTER" pr afficher ttes les infos du perso
      return this.pseudo + " (" + this.classe + ") a " + this.sante + " points de vie et est au niveau " + this.niveau + ".";
    }
    
    evoluer() { //METHOD, pas besoin du mot clé "function", ns sommes ds une classe
      this.niveau++;
      console.log(this.pseudo + ' passe au niveau ' + this.niveau + ' !');
    }
    
    verifierSante() { //METHOD, pas besoin du mot clé "function", ns sommes ds une classe
      if(this.sante <= 0) {
        this.sante = 0;
        console.log(this.pseudo + " a perdu !");
      }
    }
  }
  
  class Magicien extends Personnage { //Herite de la class Personnage
    constructor(pseudo) {
      super(pseudo, "magicien", 170, 90);
    }
    
    attaquer(personnage) {
      personnage.sante -= this.attaque; //Retirer des pts de vie
      console.log(this.pseudo + ' attaque ' + personnage.pseudo + ' en lançant un sort (' + this.attaque + ' dégâts)');
      
      this.evoluer(); // niveau évolution du perso magicien
      personnage.verifierSante(); //vérif santé du perso adverse
    }
    
    coupSpecial(personnage) {
      personnage.sante -= this.attaque * 5;
      console.log(this.pseudo + ' attaque avec son coup spécial puissance des arcanes ' + personnage.pseudo + ' (' + this.attaque * 5 + ' dégâts)');
      personnage.verifierSante();
    }
  }
  
  class Guerrier extends Personnage { //Herite de la class Personnage
    constructor(pseudo) {
      super(pseudo, "guerrier", 350, 50);
    }
    
    attaquer(personnage) {
      personnage.sante -= this.attaque;
      console.log(this.pseudo + ' attaque ' + personnage.pseudo + ' avec son épée (' + this.attaque + ' dégâts)');
      
      this.evoluer();
      personnage.verifierSante();
    }
    
    coupSpecial(personnage) {
      personnage.sante -= this.attaque * 5;
      console.log(this.pseudo + ' attaque avec son coup spécial haches de guerre ' + personnage.pseudo + ' (' + this.attaque * 5 + ' dégâts)');
      personnage.verifierSante();
    }
  }
  
  //Initialisation nos perso et les faire combattre (les objets)
  var gandalf = new Magicien('Gandalf'); //on crée un {}gandalf qui va utiliser le constructeur magicien
  var thor    = new Guerrier('Thor');
  console.log(thor.informations);
  console.log(gandalf.informations);
  gandalf.attaquer(thor); //gandalf attaque thor
  console.log(thor.informations);
  thor.attaquer(gandalf); //thor attaque gandalf
  console.log(gandalf.informations);
  gandalf.coupSpecial(thor);