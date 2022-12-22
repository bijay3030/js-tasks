// "5. Write a program which has an array of diamonds with different value e.g. [1,2,3,4,5]. The program should distribute the diamonds equally to 3 people. For example:
// Person 1: 1,4
// Person 2: 2,3
// Person 3: 5
// There may be any number of diamonds with any value. If diamonds cannot be equally distributed(e.g [1,2,3,4]), the program should print message “Cannot distribute equally to 3 people”."


function distributeDiamonds(diamonds, numPeople) {
    const sum = diamonds.reduce((a,b) => a + b)
    if (sum %  numPeople != 0) {
        console.log("Cannot distribute diamonds equally to three people.")
    } else {
        let distribute = []
        let prevDiamondData = []
        for (let i = 0; i < diamonds.length; i++) {
            let differenceOfEachElement = (sum /  numPeople) - diamonds[i]
            if (differenceOfEachElement == 0) {
                distribute.push([diamonds[i]])
            } else if (prevDiamondData.includes(differenceOfEachElement)) {
                distribute.push([diff, diamonds[i]])
                delete prevDiamondData[prevDiamondData.indexOf(differenceOfEachElement)]
            } else {
                prevDiamondData.push(diamonds[i])
            }
            
        }
        if (distribute.length ==  numPeople) {
          
            console.log(`person 1: ${distribute[0]}`)
            console.log(`person 2: ${distribute[1]}`)
            console.log(`person 3: ${distribute[2]}`)
        } else {
            console.log("Cannot distribute diamonds equally to three people.")
    }
}
}
const diamonds = [1, 2, 3, 4,5,6];
distributeDiamonds(diamonds,3)