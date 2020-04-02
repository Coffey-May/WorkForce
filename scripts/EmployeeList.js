import { useComputers } from "./ComputerDataProvider.js"
import { useEmployees } from "./EmployeeDataProvider.js"
import {useDepartments} from "./DepartmentDataProvider.js"
import Employee from "./EmployeeComponent.js"
import {useLocations }from "./LocationDataProvider.js"

// import Product from "./Product.js"

const contentTarget = document.querySelector(".Employees")

export const EmployeeList = () => {
    const employees = useEmployees()
    const computerTypes = useComputers()
    const departments = useDepartments()
    const locations = useLocations()
   
    const render = () => {

        contentTarget.innerHTML = employees.map(employee => {
            const type = computerTypes.find(type => type.id === employee.computerId)
            const department = departments.find(dept => dept.id === employee.departmentId)
            const location = locations.find(loc => loc.id === employee.locationId)

            const html = Employee(employee, type, department, location)
            return html 
            
        }).join("")
    }

    render()
}

export default EmployeeList
