const greetModule = require('./build/Release/greet.node');

console.log('exports:', greetModule);
console.log();

console.log('greetModule.greetHello():', greetModule.greetHello('Sid'));
console.log();
