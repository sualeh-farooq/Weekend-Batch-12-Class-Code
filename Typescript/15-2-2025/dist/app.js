"use strict";
// // let userName:string;
// // userName = 'Ali'
// // let fruits : string[] = []
// // fruits.push('apple')
// // fruits.push(0)
// // let fruits: string[] = []
// // fruits.push('Apple')
// // fruits.push(true)
// // fruits.push(false)
// // let rollNo = 123
// // rollNo = '123'
// // type Student = {
// //     name: string
// //     skills: string[]
// //     class: string
// //     rollNo: number
// // }
// // let newStudent: Student = {
// //     name: 'Ali',
// //     skills: ['HTML' , 'CSS' , 'HTML' , 'CSS'],
// //     class: 'Matric',
// //     rollNo: 123
// // }
// // console.log(newStudent)
// // type studentSkills =  [string , boolean] ; // Tuple 
// // let mySkills: studentSkills = ['HTML' , true ]
// // console.log(mySkills)
// // type Student = {
// //     name: string
// //     skills: string[]
// //     class: string
// //     rollNo: number
// //     // email?: string // optional
// // }
// // let studentArr : Student[] = []
// // let obj : Student = {
// //     skills: ['HTML'] ,
// //     name: 'Ali',
// //     class: 'Matric',
// //     rollNo: 123 ,
// // }
// // obj.email = 'sualeh@gmail.com'
// // studentArr.push(obj)
class Student {
    constructor(n, r) {
        this.skills = [];
        this.name = n;
        this.rollNo = r;
    }
    set addSkills(skill) {
        this.skills.push(skill);
    }
    get getSkills() {
        return this.skills;
    }
    changeStaticId(id) {
        return Student.id = id;
    }
}
Student.id = 123;
class Student2 {
    constructor(n, r) {
        this.skills = [];
        this.name = n;
        this.rollNo = r;
    }
    set addSkills(skill) {
        this.skills.push(skill);
    }
    get getSkills() {
        return this.skills;
    }
    changeStaticId(id) {
        return Student.id = id;
    }
}
Student2.id = 123;
let newStd = new Student('John', 123);
// console.log(newStd)
console.log(newStd.rollNo);
// // class VStudent extends Student {
// //         canVolunteerIn: string[] = []
// //         constructor(name:string , rollNo: number) {
// //             super(name = name , rollNo = rollNo )
// //         }
// //         set setVolunteerEvent(event:string) {
// //             this.canVolunteerIn.push(event)
// //         }
// //         // setVolunteerEvent(event:string) {
// //         //     return this.canVolunteerIn.push(event)
// //         // }
// //         getAddress(address: string): void {
// //         }
// //         VolunteerStdSkills(){
// //             return this.skills
// //         }
// // }
// // let volunteerStd = new VStudent('John' , 123)
// // volunteerStd.skill
// // volunteerStd.setVolunteerEvent('Exam')
// // volunteerStd.setVolunteerEvent = 'Exam'
// // console.log(volunteerStd)
// // console.log(Student.id)
// // let newStudent = new Student('John' , 123)
// // newStudent.changeStaticId(100)
// // console.log(Student.id)
//     // console.log(newStudent.id)
// // newStudent.addSkills = 'CSS'
// // console.log(newStudent.getSkills)
// // // newStudent.addSkills('HTML')
// // console.log(newStudent.getSkills())
// // console.log(newStudent.skills)
// // newStudent.skills = []
// // console.log(newStudent)
// interface CustomerInfo {
//     userName: string
//     lastShop():void;
// }
// // let obj: CustomerInfo = {
// //     userName: 'John',
// //     lastShop() {
// //         console.log('Last Shop Yesterday')
// //     },
// // }
// // class customerData implements CustomerInfo {
// //     userName: string;
// //     constructor(n: string){
// //         this.userName = n
// //     }
// //     lastShop(): void {
// //     }
// // }
// // obj.lastShop()
// // console.log(obj)
// type Bird = {
//     name: string,
//     flySpeed: number
// }
// type Animal = {
//     name: string
//     runSpeed: number
// }
// let Creature: Animal & Bird = {  // Intersection 
//     name: 'Unicorn' ,
//     flySpeed: 200,
//     runSpeed: 100
// }
//# sourceMappingURL=app.js.map