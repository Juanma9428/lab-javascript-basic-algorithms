// Iteration 1: Names and Input

let hacker1 = "david";
console.log(`the driver's  name is ${hacker1}`);
const hacker2 = "maria";
console.log(`the navigator's  name is ${hacker2}`);
const hacker1Length = hacker1.length ;
const hacker2Length = hacker2.length;

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`${hacker1} has the longest name y tiene ${hacker1Length} caracters`)

}
    else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2Length} characters`)
}

else{
    console.log(`Wow, you both have equally long names, ${hacker1Length} characters!`)
}

// Iteration 3: Loops   

    hacker1 ="david"
     let resultadoMayus = " ";

for (let i = 0; i < hacker1.length; i++) {
    resultadoMayus = hacker1[i].toUpperCase() + " ";
    console.log(resultadoMayus);
}
for (let i = hacker1.length - 1; i >=0 ; i--) {
    const resultadoReverse = hacker1[i];
    console.log(resultadoReverse);
}