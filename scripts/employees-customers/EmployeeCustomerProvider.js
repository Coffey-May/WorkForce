
let employeeCustomers = []

export const getEmployeeCustomers = () => {
    return fetch("http://localhost:8088/employeeCustomers")
        .then(res => {
            return res.json()
        })
        .then(parsedEmployeeCustomers => {
            return employeeCustomers = parsedEmployeeCustomers
        })
}

export const useEmployeeCustomers = () => {
    return employeeCustomers.slice()
}