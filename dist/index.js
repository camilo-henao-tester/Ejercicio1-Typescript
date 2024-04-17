"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const department_employe_enum_1 = require("./enums/department-employe.enum");
const salary_total_function_1 = require("./functions/salary-total.function");
const employe1 = {
    id: 1,
    name: 'juan',
    lastName: 'henao',
    salary: 50000,
    department: department_employe_enum_1.Department.IT
};
console.log((0, salary_total_function_1.salaryTotal)(employe1));
