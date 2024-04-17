"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.salaryTotal = void 0;
function salaryTotal(employe) {
    let total = 0;
    if (employe.department === "IT") {
        total = employe.salary * (1 + 0.1);
    }
    else if (employe.department === "HR") {
        total = employe.salary * (1 + 0.08);
    }
    else if (employe.department === "Sales") {
        total = employe.salary * (1 + 0.12);
    }
    else if (employe.department === "Finance") {
        total = employe.salary * (1 + 0.09);
    }
    return total;
}
exports.salaryTotal = salaryTotal;
