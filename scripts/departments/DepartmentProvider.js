let departments = [];

export const getDepartments = () => {
    return fetch("http://localhost:8088/departments")
        .then(res => {
            return res.json();
        })
        .then(parsedDepartments => {
            return (departments = parsedDepartments);
        });
};

export const useDepartments = () => {
    return departments.slice();
};