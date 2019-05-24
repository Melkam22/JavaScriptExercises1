
/* stringMethods; trim, includes, substring, match, toUpperCase,
toLowerCase, slice, chartAt, replace, ...*/

let maPhrase = "renard qui habite dans la foret d'acote et qui est tres malin,";
console.log(`L'histoire du ${maPhrase} est tres interessante.`);
console.log(`L'histoire du ${maPhrase.length-1} est tres drole.`);

        /*substring ll take the given middle part and print it*/
console.log(`L'histoire du ${maPhrase.substring(0, 31)} est tres drole.`);
console.log(`L'histoire du ${maPhrase.replace("renard", "lion")} est tres drole.`);
console.log(`L'histoire du ${maPhrase.toUpperCase()} est tres drole.`);
console.log(`L'histoire du ${maPhrase.toLowerCase()} est tres drole.`);
