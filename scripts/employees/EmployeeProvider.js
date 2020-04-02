
let employees = [];

export const getEmployees = () => {
    return fetch("http://localhost:8088/employees")
        .then(res => {
            return res.json();
        })
        .then(parsedEmployees => {
            return (employees = parsedEmployees);
        });
};

export const useEmployees = () => {
    return employees.slice();
};