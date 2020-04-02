let location = []
export const useLocations = () => location.slice()
export const getLocations = () => fetch("http://localhost:8088/Locations")
    .then(res => res.json())
    .then(parsedLocations => location = parsedLocations)
