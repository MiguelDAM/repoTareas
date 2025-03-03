// Iteration 1: Names and Input
console.log('Names and Input');
let hacker1 = 'John';
console.log(`The driver's name is ${hacker1}`);
let hacker2 = 'Jane';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
console.log('');
console.log('Conditionals');
if (hacker1.length > hacker2.length) {
    console.log(
        `The driver has the longest name, it has ${hacker1.length} characters.`
    );
} else if (hacker1.length < hacker2.length) {
    console.log(
        `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
    );
} else {
    console.log(
        `Wow, you both have equally long names, ${hacker1.length} characters!`
    );
}
console.log('');
console.log('Loops');

// Iteration 3: Loops
for (let i = 0; i < hacker1.length; i++) {
    console.log(hacker1[i].toUpperCase());
}
console.log('');
for (let i = hacker2.length - 1; i >= 0; i--) {
    console.log(hacker2[i]);
}

console.log('');
for (let i = 0; i < hacker1.length; i++) {
    if (hacker1[i] < hacker2[i]) {
        console.log(`The driver's name goes first.`);
        break;
    } else if (hacker1[i] > hacker2[i]) {
        console.log(`Yo, the navigator goes first definitely.`);
        break;
    }
    if (i === hacker1.length - 1) {
        console.log(`What?! You both have the same name?`);
    }
}

console.log('Bonus 1');
const longText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat mollis quam vitae sodales. Duis tortor odio, commodo eu urna a, faucibus suscipit libero. Donec id convallis urna, ac pretium magna. Mauris justo quam, iaculis vitae congue eu, blandit at lacus. Maecenas purus libero, congue eget tincidunt et, finibus id massa. Etiam tempus gravida lacus, sed bibendum orci pellentesque vitae. Nullam quis turpis eu leo sollicitudin hendrerit. Suspendisse faucibus, est in egestas dictum, augue nibh eleifend elit, ut vulputate nulla ipsum gravida dui. In eleifend posuere arcu, in efficitur ipsum tristique in. Maecenas consectetur arcu at consectetur euismod. Nullam mattis lacus vitae est placerat tempus. Phasellus egestas quam lectus, at malesuada ex cursus at. Donec eu lectus eu ex lobortis sollicitudin. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam vitae nisi hendrerit, auctor dui sed, auctor nisi. Nullam scelerisque, augue consectetur maximus egestas, tortor justo placerat purus, quis efficitur nulla tortor vitae dui. Nam sit amet condimentum ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas quis enim nibh. Aliquam pulvinar elementum enim sit amet varius. Duis lectus quam, interdum vel felis at, tempus fringilla nisl. Duis non porta sem. Praesent iaculis, eros non elementum vehicula, dolor felis ullamcorper sem, id dignissim urna nibh a odio. Phasellus vitae semper ipsum, posuere elementum lectus. Proin finibus viverra diam lacinia tincidunt. Nulla cursus tellus vitae tincidunt posuere. Mauris lobortis tristique arcu, ut facilisis tortor molestie eget. Pellentesque laoreet ex bibendum pharetra lacinia. Aliquam erat volutpat. Nunc egestas sed quam quis lacinia. Quisque sed elit sed arcu accumsan lobortis sollicitudin non turpis. Etiam pellentesque urna sit amet aliquet varius. In hac habitasse platea dictumst. Duis ullamcorper id nibh sed varius.';
const arrayParrafo = longText.split(' ');
console.log(arrayParrafo.length);

let contadorEt = 0;
for (let i = 0; i < arrayParrafo.length; i++) {
    const element = arrayParrafo[i];
    if (element === 'et') {
        contadorEt++;
    }
}

console.log(contadorEt);

const phraseToCheck = 'Dabale arroz a la zorra el abad';
let palabraAtras = '';
for (let i = phraseToCheck.length - 1; i >= 0; i--) {
    palabraAtras += phraseToCheck[i].toLowerCase().trim(' ');
}
console.log(palabraAtras);

let palabraDerecha = '';
for (let i = 0; i < phraseToCheck.length; i++) {
    palabraDerecha += phraseToCheck[i].toLowerCase().trim(' ');
}
console.log(palabraDerecha);

if (palabraDerecha === palabraAtras) {
    console.log('Es un palíndromo');
} else {
    console.log('No es un palíndromo');
}
