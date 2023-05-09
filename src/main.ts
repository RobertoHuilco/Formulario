
import { Student } from "./entities/student";
let student: Student[] = [];
// el arreglo es para guardar los datos del formulario
function addStudent() {
    let currentStudent:Student = {
        
        name: readHTML("nameStudent"),
        identification: parseInt(readHTML("identificationStudent")),
        address: readHTML("addressStudent"),
        registrationCode: parseInt(readHTML("registrationCodeStudent")),
        carrer: readHTML("carrerStudent"),
        level: readHTML("levelStudent"),
    }
    student.push(currentStudent);
    console.log(student);
    console.table(student);
}

// funcion con elemento para luego mandarlos a otras partes
function readHTML(id: string): string {
    return (<HTMLInputElement>document.getElementById(id)).value;
}