"use strict";
// // // // let userName:string;
// type Creature = Bird | Animal 
// function log(creature: Creature){
//     console.log(`Name is ${creature.name}`)
//     // console.log(`Flying Speed is $${creature.flySpeed}`)
//     // Type Guards 
//     if("runSpeed" in creature) {
//         console.log(`The Run Speed is ${creature.runSpeed}`)
//     } else {
//         console.log(`The Fly Speed is ${creature.flySpeed}`)
//     }
// }
// log({name:'Hen' , runSpeed: 100})
// let input  =  <HTMLInputElement>document.getElementById('textInp1')
// console.log(input.value) 
// let myPromise: Promise<string>  = new Promise((resolve , reject)=>{
//     setTimeout(()=>{
//         resolve('My Promise Resolve ')
//     },2000)
// })
// myPromise.then((data)=>{
//     console.log(data.slice(0,5))
// })
function mergeMyData(objA, objB) {
    return Object.assign(Object.assign({}, objA), objB);
}
let dataMerged = mergeMyData({ name: 'Ali' }, { age: 25 });
console.log(dataMerged);
console.log(dataMerged.name);
// console.log(mergeMyData({name: 'Ali'} , {age: 25}))
//# sourceMappingURL=app.js.map