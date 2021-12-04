//Todays weather in Kelvin
const kelvin = 0;

//Temperature in celsius
const celsius = kelvin - 273;

//convert temperature fron celsius to fahrenheit
let fahrenheit = celsius*(9/5) + 32;

//round down value in fahrenheit
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);


/////NEWTON SCALE

//convert temperature fron celsius to newton
let newton = celsius*(33/100);

//round down value in newton
newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newtons.`);