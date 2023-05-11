"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let student = [];
let teacher = [];
let courses = [];
var Carrera;
(function (Carrera) {
    Carrera["turismo"] = "Turismo";
    Carrera["marketing"] = "Marketing";
    Carrera["desarrollo"] = "Desarrollo de software";
})(Carrera || (Carrera = {}));
// el arreglo es para guardar los datos del formulario
function addStudent() {
    let currentStudent = {
        name: readHTML("nameStudent"),
        identification: parseInt(readHTML("identificationStudent")),
        address: readHTML("addressStudent"),
        registrationCode: parseInt(readHTML("registrationCodeStudent")),
        level: readHTML("levelStudent"),
    };
    student.push(currentStudent);
    //console.log(student);
    console.table(student);
}
function addTeacher() {
    let currentTeacher = {
        name: readHTML("nameTeacher"),
        identification: parseInt(readHTML("identificationTeacher")),
        address: readHTML("addressTeacher"),
        carrer: readHTML("carrerTeacher"),
        title: readHTML("titleTeacher"),
        asignature: readHTML("asignatureTeacher"),
    };
    teacher.push(currentTeacher);
    //console.log(teacher);
    console.table(teacher);
}
//cursos
function addCourse() {
    let currentCourse = {
        area: readHTML("areaCourse"),
        name: readHTML("nameCourse"),
    };
    courses.push(currentCourse);
    console.table(courses);
}
// funcion con elemento para luego mandarlos a otras partes
function readHTML(id) {
    return document.getElementById(id).value;
}
