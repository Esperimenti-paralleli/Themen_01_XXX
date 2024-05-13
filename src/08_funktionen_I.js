
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

/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN

outputNames2("Esther"); // Argument --> Daten für Parameter
outputNames2("Jan");
outputNames2();

function outputNames2(firstName) { // Parameter
    console.log("Hallo, " + firstName + "!"); 
}

