/*
const miPrimeraPromesa = new Promise((funcionOK) => {
  
  // Asynchronous stuff
  setTimeout(() => funcionOK("done!"), 1000);
  
});

miPrimeraPromesa.then((msg) => console.log(msg)).catch(() => {})
*/

////////////////

function printString (string) {
  return new Promise((success) => {
    setTimeout(
      () => {
        escribe(string);
        success();
      }, Math.floor(Math.random() * 100) + 1
      )
    })
  }
      
  function printPrecuela () {
    return new Promise((ok) => {
      printString('Episodio I: la amenaza fantasma')
      .then(() => printString('Episodio II: el ataque de los clones'))
      .then(() => printString('Episodio III: la venganza de los sith'))
      .then(() => ok())
    })
    //   printString('Episodio I: la amenaza fantasma')
    // printString('Episodio II: el ataque de los clones')
    // printString('Episodio III: la venganza de los sith')
  }
  
  const escribe = msg => {
    const $body = document.querySelector('body')
    const $message = document.createElement('p')
    $message.innerHTML = msg
    $body.appendChild($message)
  }
  
  function printParalelas () {
    return new Promise((ok) => {
    printString('Han Solo: una historia de Star Wars')
    .then(() => printString('Rogue One: una historia de Star Wars'))
    .then(() => ok())
  })
    // printString('Han Solo: una historia de Star Wars')
    // printString('Rogue One: una historia de Star Wars')
  }
  
function printOriginal () {
  return new Promise((ok) => {
printString('Episodio IV: una nueva esperanza')
.then(() => printString('Episodio V: el imperio contraataca'))
.then(() => printString('Episodio VI: el regreso del jedi'))
.then(() => ok())   
})
/*  
printString('Episodio IV: una nueva esperanza')
  printString('Episodio V: el imperio contraataca')
  printString('Episodio VI: el regreso del jedi')
*/
}



















function printSecuelas () {
  return new Promise((resolve) =>
    printString('Episodio VII: el despertar de la fuerza')
    .then(() => printString('Episodio VIII: el último jedi'))
    .then(() => printString('Episodio IX: el ascenso de Skywalker'))
    .then(() => resolve()));

/*
  printString('Episodio VII: el despertar de la fuerza')
  printString('Episodio VIII: el último jedi')
  printString('Episodio IX: el ascenso de Skywalker')
*/
}

function printAll () {
  printPrecuela()
  .then(() => printParalelas())
  .then(() => printOriginal())
  .then(() => printSecuelas())
  .then(() => console.log("Todo ha sido impreso"));
}

 printAll()
//   printString(() => printPrecuela())
//   .then(() => printParalelas())
//   .then(() => printOriginal())
//   .then(() => printSecuelas())
// )



// function imprimir(success, reject) {
//   console.log("Imprimo");
//   success(loQueSeHaImprimido);
// }

// let p = new Promise(imprimir);

// p.then(function (loQueSeHaImprimido) {

// })


/*
//La función a devuelve una promesa
function a() {
  return (new Promise((ok, ko) => {
    setTimeout(() => ok("Funciona"), 500);
  }));
}
//Por ello puedo poner .then al ejecutarla
a().then((msg) => console.log(msg));
*/




/*    funciones flecha

let suma = (a, b) => {
  return (a + b);
}

let multiplicacion = (a, b) => {
  if (a > 0 && b > 0)
    return (a*b);
  return (0);
}

let resta = (a, b) => a - b

let generarArray = () => [1,2,3];

let generarObjeto = () => ({a: 2, b: 3});

let imprimir = string => console.log(string)


suma(1,2)
multiplicacion(4, 5)

let dividir = (a, b) => a / b;

function dividir(a, b){
  return (a / b);
}

(a, b) => a / b

function (a, b) {
  return a / b;
}

*/

/*
() => printParalelas()

function () {
  return printParalelas()
}
*/