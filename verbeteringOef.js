
// import * as readline from "node:readline/promises";
// import { stdin as input, stdout as output } from "node:process";
// const userInput = readline.createInterface({ input, output });

// function oppervlakteMeten(basis,hoogte) {

//    let oppervlakte = basis * hoogte /2
//    return oppervlakte
// }

// console.log(oppervlakteMeten(10,15));

// E1

// function sayHallo (naam){
//     return console.log(`Hallo ${naam}`);

// }

// E2

// function circleOppervlakte(straal) {
//     let oppervlakte = Math.PI*(straal*straal)
//     return oppervlakte;
// }

// function driehoekOppervlakte(basis,hoogte){
//     let oppervlakte = (basis * hoogte) /2
//     return oppervlakte
// }

// const rechthoekOppervlakte = (zijde1,zijde2) => {
//     let oppervlakte = zijde1 * zijde2
//     return oppervlakte
// }

// const vierkantOppervlakte = (zijde) => {
//     let oppervlakte = zijde**2
//     return oppervlakte
// }

// console.log(circleOppervlakte(6));
// console.log(driehoekOppervlakte(5,6));
// console.log(rechthoekOppervlakte(5,6));
// console.log(vierkantOppervlakte(6));

// E3:Temperatuur converter

// const temperatuurConverter = async () => {
//   let temperatuur = parseFloat(
//     await userInput.question("Geef me de temperatuur: ")
//   );
//   let isCelcius = await userInput.question("Is dit in Celcius ? (true,false)");
//   if (isCelcius == true) {
//     let farenheit = (temperatuur * 9) / 5 + 32;

//     console.log(farenheit);
//     ;
//   } else {
//     //  °C = (°F - 32) x 5/9
//     let celcius = ((temperatuur - 32) * 5) / 9;

//     console.log(celcius);
//     ;
//   }
// };

// await temperatuurConverter();

// E4: Factorial

// const factorial = (getal) => {
//   if (getal < 1) {
//     console.error();
//   } else {
//     let resultaat = 1;
//     for (let i = getal; i > 1; i--) {
//       resultaat *= i;
//     }
//     return resultaat;
//   }
// };
// console.log(factorial(0));

// E5: Ingebouwde functies

// M1: Hoger/lager
// We gaan beginnen met een klein spel te bouwen. De opzet is heel simpel: de gebruiker moet een getal tussen 1 en 10 juist raden. Dankzij enkele functies van Math kunnen we random getallen genereren:

// const raadSpel = async () => {
//   let aantalGokken = 3;
//   let randomGetal = Math.floor(Math.random() * 10);
//   let getal;
//   do {
//     getal = parseFloat(
//       await userInput.question("Geef een getal tussen 1 en 10? ")
//     );
//     if (getal == randomGetal) {
//       console.log(
//         `Proficiat jouw getal is ${getal} en je moest ${randomGetal} vinden`
//       );
//     } else if (getal < randomGetal) {
//       aantalGokken--;
//       console.log(
//         `helaas je hebt ${getal} ingevoerd probeer hoger , pas op je hebt nog ${aantalGokken} kans(en)`
//       );
//     } else {
//       aantalGokken--;
//       console.log(
//         `helaas je hebt ${getal} ingevoerd probeer lager ,pas op je hebt nog ${aantalGokken} kans(en)`
//       );
//     }
//     if(aantalGokken == 0){
//         console.log(`Game over , BYE BYE`);  
//     }
//     console.log(getal + " " + randomGetal);
//   } while (getal != randomGetal && aantalGokken > 0 );
// };

// await raadSpel();




// process.exit();
