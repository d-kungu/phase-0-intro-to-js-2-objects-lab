// Write your solution in this file!
let employee = {
name: "Sam",
streetAdress: "11 Broadway",

};

function updateEmployeeWithKeyAndValue(employee, key, value){
    return { ...employee,
        [key]: value

    }
} 


function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){

        employee[key] = value 
    return employee
};

function deleteFromEmployeeByKey(employee, key){
    let newEmployee = {...employee};
    delete newEmployee[key]
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
delete employee[key]
let newEmployee= employee
return newEmployee
     
}



