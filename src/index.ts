import { Department } from './enums/department-employe.enum';
import { salaryTotal } from './functions/salary-total.function';
import { Employe } from './interfaces/empoye.interface';
const employe1: Employe = {
    id : 1,
    name : 'juan',
    lastName : 'henao',
    salary: 50000,
    department: Department.IT
}


console.log(salaryTotal(employe1));

