// // // // let userName:string;

// // // // userName = 'Ali'



// // // // let fruits : string[] = []

// // // // fruits.push('apple')
// // // // fruits.push(0)




// // // // let fruits: string[] = []


// // // // fruits.push('Apple')
// // // // fruits.push(true)
// // // // fruits.push(false)


// // // // let rollNo = 123

// // // // rollNo = '123'

// // // // type Student = {
// // // //     name: string
// // // //     skills: string[]
// // // //     class: string
// // // //     rollNo: number
// // // // }


// // // // let newStudent: Student = {
// // // //     name: 'Ali',
// // // //     skills: ['HTML' , 'CSS' , 'HTML' , 'CSS'],
// // // //     class: 'Matric',
// // // //     rollNo: 123
// // // // }
// // // // console.log(newStudent)

// // // // type studentSkills =  [string , boolean] ; // Tuple 
// // // // let mySkills: studentSkills = ['HTML' , true ]
// // // // console.log(mySkills)






// // // // type Student = {
// // // //     name: string
// // // //     skills: string[]
// // // //     class: string
// // // //     rollNo: number
// // // //     // email?: string // optional
// // // // }
// // // // let studentArr : Student[] = []
// // // // let obj : Student = {
// // // //     skills: ['HTML'] ,
// // // //     name: 'Ali',
// // // //     class: 'Matric',
// // // //     rollNo: 123 ,
// // // // }

// // // // obj.email = 'sualeh@gmail.com'

// // // // studentArr.push(obj)
// //  class Student {
// //     name: string
// //     readonly rollNo: number
// //     protected skills: string[] = []
// //     static id: number = 123 
// //     constructor(n:string, r: number) {
// //         this.name = n
// //         this.rollNo = r
// //     }
// //     set addSkills(skill:string){
// //         this.skills.push(skill)
// //     }
// //     get getSkills(){
// //         return this.skills
// //     }
// //     changeStaticId(id:number) {
// //         return Student.id = id
// //     }
// //     // abstract getAddress(address:string) : void;
// // }

// // // abstract class Student2 {
// // //     name: string
// // //     readonly rollNo: number
// // //     protected skills: string[] = []
// // //     static id: number = 123 
// // //     constructor(n:string, r: number) {
// // //         this.name = n
// // //         this.rollNo = r
// // //     }
// // //     set addSkills(skill:string){
// // //         this.skills.push(skill)
// // //     }
// // //     get getSkills(){
// // //         return this.skills
// // //     }
// // //     changeStaticId(id:number): number {
// // //         return Student.id = id
// // //     }
// // //     abstract getAddress(address:string) : void;
// // // }


// // let newStd = new Student('John' , 123)
// // // console.log(newStd)


// // console.log(newStd.rollNo)

// // // // class VStudent extends Student {
// // // //         canVolunteerIn: string[] = []
// // // //         constructor(name:string , rollNo: number) {
// // // //             super(name = name , rollNo = rollNo )
// // // //         }
// // // //         set setVolunteerEvent(event:string) {
// // // //             this.canVolunteerIn.push(event)
// // // //         }
// // // //         // setVolunteerEvent(event:string) {
// // // //         //     return this.canVolunteerIn.push(event)
// // // //         // }
// // // //         getAddress(address: string): void {
// // // //         }
// // // //         VolunteerStdSkills(){
// // // //             return this.skills
// // // //         }

// // // // }

// // // // let volunteerStd = new VStudent('John' , 123)


// // // // volunteerStd.skill

// // // // volunteerStd.setVolunteerEvent('Exam')
// // // // volunteerStd.setVolunteerEvent = 'Exam'

// // // // console.log(volunteerStd)
// // // // console.log(Student.id)


// // // // let newStudent = new Student('John' , 123)
// // // // newStudent.changeStaticId(100)

// // // // console.log(Student.id)



// // //     // console.log(newStudent.id)

// // // // newStudent.addSkills = 'CSS'

// // // // console.log(newStudent.getSkills)
// // // // // newStudent.addSkills('HTML')


// // // // console.log(newStudent.getSkills())
// // // // console.log(newStudent.skills)

// // // // newStudent.skills = []

// // // // console.log(newStudent)

// // // interface CustomerInfo {
// // //     userName: string
// // //     lastShop():void;
// // // }
// // // // let obj: CustomerInfo = {
// // // //     userName: 'John',
// // // //     lastShop() {
// // // //         console.log('Last Shop Yesterday')
// // // //     },
// // // // }

// // // // class customerData implements CustomerInfo {
// // // //     userName: string;
// // // //     constructor(n: string){
// // // //         this.userName = n
// // // //     }
// // // //     lastShop(): void {
// // // //     }
// // // // }
// // // // obj.lastShop()
// // // // console.log(obj)

// // // type Bird = {
// // //     name: string,
// // //     flySpeed: number
// // // }
// // // type Animal = {
// // //     name: string
// // //     runSpeed: number
// // // }

// // // let Creature: Animal & Bird = {  // Intersection 
// // //     name: 'Unicorn' ,
// // //     flySpeed: 200,
// // //     runSpeed: 100
// // // }



// // abstract class Vehicle {
// //     constructor(public make: string , public model: string) {}
// //     abstract getInfo(): void
// // }


// // class BMW extends Vehicle {
// //     isAutomatic: boolean
// //     constructor(make: string , model:string , automatic: boolean) {
// //         super(make, model) // pick it from parent class
// //         this.isAutomatic = automatic
// //     }
// //     getInfo(): boolean {
// //         return this.isAutomatic 
// //     }
// // }

// // var newVehicle = new BMW('2015' , 'Lexus' , true)
// // // var justVehicle = new Vehicle('2015' , 'Lexus' )

// // console.log(newVehicle)



// // type Bird = {
// //     name: string,
// //     flySpeed: number
// // }
// // type Animal = {
// //     name: string
// //     runSpeed: number
// // }

// // type Creature2 = Bird & Animal 



// // interface Bird  {
// //     name: string,
// //     flySpeed: number
// // }
// // interface Animal  {
// //     name: string
// //     runSpeed: number
// // }

// // interface Creature extends Bird , Animal {}

// // let obj : Animal = {
// //     name: 'Horse',
// //     runSpeed: 100
// // }

// // console.log(obj)


// interface CustomerInfo {
//     customerName: string
//     getCartList(): void
// }

// // let customerObj : CustomerInfo = {
// //     customerName: 'John',
// //     getCartList() {
// //         console.log(['Apple' , 'Mango'])        
// //     },
// // }

// // console.log(customerObj)
// // customerObj.getCartList()

// // class customerData implements CustomerInfo {
// //     constructor(public customerName: string , public customerId: number , public customerPhone: number ) {}
// //     getCartList(): void {
// //         console.log('Cart here')
// //     }
// //     getCustomerInfo(){
// //         return 'Hello '
// //     }
// // }


type Bird = {
    name: string,
    flySpeed: number
}
type Animal = {
    name: string
    runSpeed: number
}

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

function mergeMyData <A extends object , B extends object> (objA:A , objB: B){
    return {...objA , ...objB}
}

let dataMerged = mergeMyData({name: 'Ali'} , {age: 25})

console.log(dataMerged)
console.log(dataMerged.name)
// console.log(mergeMyData({name: 'Ali'} , {age: 25}))