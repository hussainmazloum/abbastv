/* Lopp gjennom en rekke objekter (brukernavn og passord) */
let brukerNavn = [
  { brukernavn: "hussain", passord: "1235" },
  { brukernavn: "claudine", passord: "1235" },
  { brukernavn: "hassan", passord: "1235" },
  { brukernavn: "hadil", passord: "1235" },
  { brukernavn: "abbas", passord: "1235" },
  { brukernavn: "quran", passord: "1234" },

];

function loggInn() {
  let brukernavn = document.getElementById("brukernavn").value;
  let passord = document.getElementById("passord").value;

  let message = document.getElementById("bake");

  let popup = document.getElementById("risala");

  for (let i = 0; i < brukerNavn.length; i++) {
    // sjekk om brukerinndata samsvarer med brukernavn og passord til en gjeldende indeks i objPeople-arrayet
    if (
      brukernavn == brukerNavn[i].brukernavn &&
      passord == brukerNavn[i].passord
    ) {
      /* alert(brukernavn + " er logget inn!!!"); */
      // stopp funksjonen hvis dette viser seg å være sant
      window.location.href = "ip.html";
      return;
    }
  }
  alert("feil brukernavn eller passord");
}

function knappe() {
  var visebrukerNavn = document.getElementById("brukernavn");
  var visePassord = document.getElementById("passord");

  if (visebrukerNavn.type === "brukernavn" || visePassord.type === "password") {
    visebrukerNavn.type = "text";
    visePassord.type = "text";
  } else {
    visebrukerNavn.type = "password";
    visePassord.type = "password";
  }
}

function tilbake() {
  window.location.href = "index.html";
}

