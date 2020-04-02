let customers = []

export const getCustomers = () => {
    return fetch("http://localhost:8088/customers")
        .then(res => {
            return res.json()
        })
        .then(parsedCustomers => {
            return customers = parsedCustomers
        })
}

export const useCustomers = () => {
    return customers.slice()
}