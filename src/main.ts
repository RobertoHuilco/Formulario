import { Teacher } from "./entities/teacher";
import { Student } from "./entities/student";
// import { Course } from "./entities/cuorse";
import { Activity } from "./entities/activity";
import { GradeBook } from "./entities/grades_book";
let student: Student[] = [];
let teacher: Teacher[] = [];
let courses: Course[] = [];
let activity: Activity[] = [];
let gradeBook: GradeBook[] = [];
enum Carrera{
    turismo="Turismo",
    marketing="Marketing",
    desarrollo="Desarrollo de software"
}
// enu enlista los elemento
// no es un arreglo se lo dene covertir
enum Course{
    typeScript = "Type Scrip",
    php="php",
    angular= "Angular"


}
enum Area{
    programacion="Programacion",
    diseño="Diseño",
    redes="Redes"
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
// function addCourse() {
//     let currentCourse:Course= {
        
//         area: readHTML("areaCourse"),

//         name: readHTML("nameCourse"),

//     }
//     courses.push(currentCourse);
//     //console.log(teacher);
//     console.table(courses);
// }
//Actividad
function addActivity() {
    let currentActivity:Activity= {
        
        name: readHTML("nameActivity"),


    }
    activity.push(currentActivity);
    //console.log(teacher);
    console.table(activity);
    initSelect();
}
function addGradeBook() {
    let currentGradeBook:GradeBook= {
        course:readHTML("courseGradeBook"),
        activity:readHTML("gradebook_activity"),
        weight:parseInt(readHTML("weightGradeBook")),
        noteMax:parseInt(readHTML("noteMaxGradeBook")),



    }
    gradeBook.push(currentGradeBook);
    //console.log(teacher);
    console.table(gradeBook);
    initSelect();

}



// funcion con elemento para luego mandarlos a otras partes
function readHTML(id: string): string {
    return (<HTMLInputElement>document.getElementById(id)).value;
}
function getOption():void{
    // se mapea las opciiones del enum con el HtmlSelectElement
    // se le asigna los avlores de enu de curso
    let courseGradeBook = document.getElementById("courseGradeBook") as HTMLSelectElement;
    //document.querySelectorAll('#courseGradeBook option').forEach(option=> option.remove());
    //remove aregar en uno a uno se van duplicando con esta funcion se va eliminando el mas viejo 
    // vamos a recorrer el enum
    let courses = Object.values(Course);
    // esta el plular por que se hace un arrglo al enu Course
    courses.forEach((value) =>{
        // El forEach trae los datos , lo que esta dentor de parentesis puede tener cualquier nombre
        let option = document.createElement("option");
        // se pone option ya que es la etiqueta del select
        option.value = value;
        // se trae el elemento del option
        option.text = value;
        courseGradeBook.add(option);
        // 

    });


}
function initSelect():void{
    let gradebookActivity =  document.getElementById("gradebook_activity") as HTMLSelectElement;

    document.querySelectorAll("#gradebook_activity option").forEach(option => option.remove());

    activity.forEach(
        (activity) => {
            let option = document.createElement("option");
            option.value = activity.name;
            option.text = activity.name;
            gradebookActivity.add(option);
        }
    );
}
initSelect();