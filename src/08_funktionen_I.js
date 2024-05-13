
/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken

// Funktionsaufruf | call(er)
// test();

// Funktionsrumpf | call(ee)
// Funktionsdeklaration
function test() 
{
    console.log("Hallo, Esther!");  
}

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

// Funktionsaufruf
// outputNames();

// Funktionsdeklaration
function outputNames() 
{
     // interne Variable | What happens in VEGAS ...
    let firstName = "Jan";
    console.log("Hallo, " + firstName + "!"); 
}

// console.log(firstName); // Fehler : scope!
