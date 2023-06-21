//ARGUMENTS
//1 = OBJECT TABLE
//2 = ARRAY DISPLAYED HORIZONTALLY
//3 = DETAILED ARRAY DISPLAY
//4 = EASILY RETURNING TEXT FROM A FUCNTION


// function pokemonEvaluation(pokemon) {
//     const { type, number, name } = pokemon;
//     // const isGen = number < 151 ? "is" : "is not";
//     const isGen = pokemonEvaluation2(number)

//     return `${name} is a ${type} type Pokemon with the National Dex number of ${number}, and therefore is a ${isGen} pokemon.`
// }

function pokemonEvaluation2(pokemon) {
    const { type, number, name } = pokemon;
    function generationCheck(num) {
        switch(true) {
            case (num <= 151):
                return "Generation 1"
            case (num <= 251):
                return "Generation 2"
            case (num <= 386):
                return "Generation 3"
            case (num <= 493):
                return "Generation 4"
            case (num <= 649):
                return "Generation 5"
            case (num <= 721):
                return "Generation 6"
            case (num <= 809):
                return "Generation 7"
            case (num <= 905):
                return "Generation 8"
            case (num <= 1016):
                return "Generation 9"
            default:
                return "unknown generation"
        }
    } 
    const isGen = generationCheck(number);

    return `${name} is a ${type} type Pokemon with the National Dex number of ${number}, and therefore is a ${isGen} pokemon.`
}


function runArgument(arg) {
    switch (arg) {
        case 1:
            console.log("Table of objects")
            console.table({ Pikachu, Ninetales });
            console.log(`code:\nconsole.table( {Object1, Object2} )\n`)
            break
        case 2:
            console.log("Array horizontal table")
            console.table({ randomArray });
            console.log(`code:\nconsole.table( {Array} )\n`)
            break
        case 3:
            console.log("Detailed array display table")
            console.table(randomArray);
            console.log(`code:\nconsole.table(randomArray)\n`)
            break
        case 4:
            console.log("Returning text from a function");
            console.log(pokemonEvaluation2(Ninetales));
            console.log(pokemonEvaluation2(Darkrai));
            break
        default:
            console.log("No argument found! Or it isn't correct. Or something.");
            break
    }
}

const Pikachu = { name: "Pikachu", number: 25, type: "Electric" };
const Ninetales = { name: "Ninetales", number: 38, type: "Fire" };
const Darkrai = { name: "Darkrai", number: 491, type: "Dark"};
const randomArray = [0, Pikachu, Ninetales, 12, "Hiya"];




runArgument(Number(process.argv[2]));
