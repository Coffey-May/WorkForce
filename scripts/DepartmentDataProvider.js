let department = []
export const useDepartments = () => department.slice()
export const getDepartments = () => fetch("http://localhost:8088/departments")
    .then(res => res.json())
    .then(parsedDepartment => department = parsedDepartment)
