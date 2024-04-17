import { Department } from '../enums/department-employe.enum';
export interface Employe{
    id: number;
    name: string;
    lastName: string;
    salary: number;
    department: Department
}