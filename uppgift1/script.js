//Skrivit funktion eller compareFunction
//Gör så att array sorteras rätt (numerical) genom att jämföra två tal och
//se vilken som är negativ, positiv eller 0. 
function jämförFunktion(a, b) {return a - b};

array = [];

//Använder while-loop for att den ska köras 10 gånger
//Använt mig av Math för att kunna få fram random tal och runda upp till närmaste integer
i = 0;
while (i < 10){
    randomTal = Math.ceil(Math.random() * 100);
    if (array.includes(randomTal) == false) {    
        i++;
        array.push(randomTal);
    }
}

console.log("Osorterad array: " + array);
array.sort(jämförFunktion);
console.log("Sorterad array: " + array);
