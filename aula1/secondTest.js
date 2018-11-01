//mono-thread
//nunca trave a main thread 
const ola = () => console.log("Ola")

setTimeout(ola, 5000)

console.log('Passo2')