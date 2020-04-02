const Employee = (employee, computer, department, location) => {
   
return`
    <div class="employee">
    <header class="employee__name">
        <h1>${employee.firstName}</h1>
    </header>
    <section class="employee__computer">
        Currently using a ${computer.model}
    </section>
    <section class="employee__department">
        Works in ${department.departmentName}
    </section>
    <section class="employee__location">
        Works at the ${location.officeLocation} location
    </section>
</div>`
}

export default Employee