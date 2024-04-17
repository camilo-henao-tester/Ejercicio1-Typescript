import { Employe } from '../interfaces/empoye.interface';
export function salaryTotal(employe:Employe): number {

    let total: number=0;
    if (employe.department === "IT") {
        total = employe.salary*(1+0.1)
    } else if(employe.department === "HR"){
        total = employe.salary*(1+0.08)
    } else if (employe.department === "Sales") {
        total = employe.salary*(1+0.12)
    } else if (employe.department === "Finance") {
        total = employe.salary*(1+0.09)
    }
    
    return total;
}