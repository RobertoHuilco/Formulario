import { Person } from "./person";
export interface Student extends Person{
    registrationCode: number;
   
    level:   string;

}