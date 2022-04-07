function solve(input) {
    let regex = /\|(?<name>[A-Z]+)\|:#(?<title>[A-Za-z]+ [A-Za-z]+)#/g;

    let n = input.shift();

    for (const line of input) {
        let b = line.match(regex);
        if (b) {
            let name = line.match(/[A-Z]{4,}/);
            let title = line.match(/(?<title>[A-Za-z]+ [A-Za-z]+)/);
            console.log(`${name[0]}, The ${title[0]}`);
            console.log(`>> Strength: ${name[0].length}`);
            console.log(`>> Armor: ${title[0].length}`);
        } else {
            console.log("Access denied!");
        }
    }
}

solve([
    "3",
    "|STEFAN|:#H1gh Overseer#",
    "|IVAN|:#Master detective#",
    "|KARL|: #Marketing lead#",
]);
console.log("--------------");

solve([
    "3",
    "|PETER|:#Lead architect#",
    "|GEORGE|:#High Overseer#",
    "|ALEX|:#Assistant Game Developer#",
]);
