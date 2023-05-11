import { Teacher } from "./entities/teacher";
import { Student } from "./entities/student";
import { Course } from "./entities/cuorse";
let student: Student[] = [];
let teacher: Teacher[] = [];
let courses: Course[] = [];
enum Carrera{
    turismo="Turismo",
    marketing="Marketing",
    desarrollo="Desarrollo de software",
}
// el arreglo es para guardar los datos del formulario
function addStudent() {
    let currentStudent:Student = {
        
        name: readHTML("nameStudent"),
        identification: parseInt(readHTML("identificationStudent")),
        address: readHTML("addressStudent"),
        registrationCode: parseInt(readHTML("registrationCodeStudent")),

        level: readHTML("levelStudent"),
    }
    student.push(currentStudent);
    //console.log(student);
    console.table(student);
}
function addTeacher() {
    let currentTeacher:Teacher = {
        
        name: readHTML("nameTeacher"),
        identification: parseInt(readHTML("identificationTeacher")),
        address: readHTML("addressTeacher"),
        carrer: readHTML("carrerTeacher"),
        title: readHTML("titleTeacher"),
        asignature: readHTML("asignatureTeacher") as "Interfaces" | "Programación" | "Base de datos",
    }
    teacher.push(currentTeacher);
    //console.log(teacher);
    console.table(teacher);
}
//cursos
function addCourse() {
    let currentCourse:Course= {
        
        area: readHTML("areaCourse"),

        name: readHTML("nameCourse"),

    }
    courses.push(currentCourse);
    console.table(courses);
}


// funcion con elemento para luego mandarlos a otras partes
function readHTML(id: string): string {
    return (<HTMLInputElement>document.getElementById(id)).value;
}