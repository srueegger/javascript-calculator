/* Entfernt die 0 aus der Ausgabe */
function nullEntfernen() {
  /*  Wert der in der "Ausgabe" steht in die Variable "wert" schreiben */
  let wert = document.getElementById( 'ausgabe' ).innerHTML;
  if ( wert == '0' ) {
    /* Wenn der Wert 0 entspricht, die 0 entfernen */
    wert = " "
    document.getElementById( 'ausgabe' ).innerHTML = wert;
  }
}

/* Taschenrechner zurücksetzen */
function zurucksetzen() {
  document.getElementById( 'ausgabe' ).innerHTML = "0";
}


/* Eingaben in die Ausgabe schreiben */
function aktionAusfuhren( wert ) {
  nullEntfernen();
  document.getElementById( 'ausgabe' ).innerHTML += wert;
}

/* Prozent Rechnen */
function prozent() {
  let wert = document.getElementById( 'ausgabe' ).innerHTML;
  wert = wert / 100;
  document.getElementById( 'ausgabe' ).innerHTML = wert;
}

/* Berechnung durchführen */
function resultat() {
  nullEntfernen()
  var gleichung = document.getElementById( 'ausgabe' ).innerHTML;
  var ergebnis = eval( gleichung );
  document.getElementById( 'ausgabe' ).innerHTML = ergebnis;
}