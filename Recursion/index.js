import { organizationData } from './orgData.js'

function searchEmployeeById(data, id) {
    let results = []
    
    for(let key in data) {
        if (key === 'employees') {
            for(let item of data[key]) {
                if (item.id === id) {
                    results.push(item)
               }
            }
        }
        
        if (typeof data[key] === 'object') {
            results = [...results, ...searchEmployeeById(data[key], id)]
        }
    }
    
    return results
}


/*
Challenge:
1. Write a function that searches for an employee in 'organizationData'. The function should recursively traverse the nested objects and find all employees with a specified ID. 

Stretch Goal:
💪 Complete the challenge without declaring any variable in the global scope.
*/



const employee = searchEmployeeById(organizationData, 6) // pass in data and employee id.

console.log(employee) // Output: [{id: 5, name: "Kwame Mensah", position: "Sales Executive"}]
