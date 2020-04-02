

let computers = [];

export const getComputers = () => {
    return fetch("http://localhost:8088/computers")
        .then(res => {
            return res.json();
        })
        .then(parsedComputers => {
            return (computers = parsedComputers);
        });
};

export const useComputers = () => {
    return computers.slice();
};