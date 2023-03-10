// creare in qualche modo delle istruzioni da seguire in automatico quando creiamo un oggetto dello stesso tipo?

// keyword: "class"
class Persona {

  // parola chiave per indicare il costruttore: ciò che, quando creiamo un oggetto seguendo queste istruzioni, ci memorizza le variabile come abbiamo indicato noi nella struttura
  constructor(nome, cognome, eta) {
    // sintassi per memorizzare i dati di persona in maniera strutturale e uguale per tutti
    // tutte le istruzioni che vogliamo
    this.nome = nome[0].toUpperCase() + nome.slice(1).toLowerCase();
    this.cognome = cognome[0].toUpperCase() + cognome.slice(1).toLowerCase();;
    this.eta = eta;
  }

  saluta() {
    return "Ciao, sono " + this.nome + " " + this.cognome + " e ho " + this.eta + " anni, e " + this.isMaggiorenne();
  }

  isMaggiorenne() {
    if(this.eta >= 18) {
      return "sono maggiorenne";
    } else {
      return "sono minorenne";
    }
  }

}

// concetto di ereditarietà
// ovvero: estende le istruzioni di Persona
// devo creare una Persona con delle caratteristiche in più
class Studente extends Persona {
  constructor(nome, cognome, eta, id, classe) {
    // proprietà della classe genitore
    super(nome, cognome, eta);
    
    this.id = id;
    this.classe = classe;
  }

  registrati() {
    this.isRegistered = true;
    return (this.nome + " è stato registrato correttamente.");
  }

  seiRegistrato() {
    if(this.isRegistered) {
      return "sono registrato!";
    } else {
      return "non sono ancora registrato.";
    }
  }
}


// se io voglio creare una nuova persona seguendo le istruzioni di Persona
// parola chiave: "new"

let gabriel = new Persona("GABRIEL", "spanu", 26);
let adriano = new Persona("Adriano", "Grimaldi", 30);
let carletto = new Persona("Carletto", "Truddaiu", 4);
let mario = new Persona("mARio", "marIO", 75);



console.log(gabriel.saluta());
console.log(adriano.saluta());
console.log(carletto.saluta());
console.log(mario.saluta());


let marco = new Studente("MARCO", "COCCO", 33, 45231, 88);

console.log(marco);

console.log(marco.seiRegistrato());
console.log(marco.registrati());
console.log(marco.seiRegistrato());

console.log(marco.saluta());
