const factories = [
    { name: "BR1", employees: ["John", "Alice", "Bob", "Jessie", "Karen"] },
    { name: "BR2", employees: ["Jessie", "Karen", "John"] },
    { name: "BR3", employees: ["Miles", "Eric", "Henry", "Bob"] },
    { name: "BR4", employees: [] }
  ]; 


// 1.Count Employees Number by Factory

function CountEmployeesNumberbyFactory(factory) {
    let employeesNumber = []
    for (var i = 0; i < factory.length; i++) {
        employeesNumber.push({
            name: factory[i].name,
            count: factory[i].employees.length
        })
    }
    return employeesNumber;
}

// console.log(CountEmployeesNumberbyFactory(factories));

// 2.Count Factories Number by Employee
function CountFactoriesNumberbyEmployee(factory) {
    let employeesName = []
    for (var i = 0; i < factory.length; i++) {
        employeesName.push(factory[i].employees)
    }
    employeesName = employeesName.flat()
    employeesNameSet = new Set(employeesName)

    let employeesNameNumber = []
    for (const name of employeesNameSet) {
        employeesNameNumber.push({
            name: name,
            count: employeesName.filter(value => value == name).length
        })
    }
    return employeesNameNumber;
}

// console.log(CountFactoriesNumberbyEmployee(factories));

// 3.Order employees list by alphabetical order 
function OrderEmployees(factory) {
    let employeesList = []
    for (var i = 0; i < factory.length; i++) {
        employeesList.push({
            name: factory[i].name,
            count: factory[i].employees.sort()
        })
    }
    return employeesList;
}

// console.log(OrderEmployees(factories));


const employeeType = [
    {id: 1, "name": "FullTime", work_begin: "09:00:00", work_end: "17:00:00"},
    {id: 2, "name": "MidTime", work_begin: "12:00:00", work_end: "21:00:00"},
    {id: 3, "name": "HalfTime", work_begin: "20:00:00", work_end: "00:00:00"},
];

const employees = [
      {id: 1, name: "Alice", type: 2},
      {id: 2, name: "Bob", type: 3},
      {id: 3, name: "John", type: 2},
      {id: 4, name: "Karen", type: 1},
      {id: 5, name: "Miles", type: 3},
      {id: 6, name: "Henry", type: 1}
];

const tasks = [
    {id: 1, title: "task01", duration: 60 },
    {id: 2, title: "task02", duration: 120},
    {id: 3, title: "task03", duration: 180},
    {id: 4, title: "task04", duration: 360},
    {id: 5, title: "task05", duration: 30},
    {id: 6, title: "task06", duration: 220},
    {id: 7, title: "task07", duration: 640},
    {id: 8, title: "task08", duration: 250},
    {id: 9, title: "task09", duration: 119},
    {id: 10, title: "task10", duration: 560},
    {id: 11, title: "task11", duration: 340},
    {id: 12, title: "task12", duration: 45},
    {id: 13, title: "task13", duration: 86},
    {id: 14, title: "task14", duration: 480},
    {id: 15, title: "task15", duration: 900}
];

// 4. Count total hours worked in 1 day

function CountTotalHoursWorked(employees, employeeType) {
    let totalHours = 0;
    for (var i = 0; i < employees.length; i++) {
        _startTime = parseInt(employeeType[employees[i].type - 1].work_begin.split(':')[0]);
        _endTime = parseInt(employeeType[employees[i].type - 1].work_end.split(':')[0]) == 0 ? 24 : parseInt(employeeType[employees[i].type - 1].work_end.split(':')[0]);
        dissTime = _endTime - _startTime;
        totalHours += dissTime;
    }
    return totalHours
}

// console.log(CountTotalHoursWorked(employees,employeeType));


// 5. Make a function that take as parameters dayTime and return number of employee working

var time = "20:05:05"; //TODO

function numberOfEmployeeWorking(time, employees, employeeType) {
    const typeCounts = employees.reduce((counts, employee) => { //calculate employees type numbers
        if (counts[employee.type]) {
            counts[employee.type]++;
        } else {
            counts[employee.type] = 1;
        }
        return counts;
    }, {});

    var employeeNumber = 0;
    for (var i = 0; i < employeeType.length; i++) { //calculate employees numbers in time range
        _work_begin = employeeType[i].work_begin;
        _work_end = employeeType[i].work_end == '00:00:00' ? '24:00:00' : employeeType[i].work_end;
        if (time <= _work_end && time >= _work_begin) {
            employeeNumber += typeCounts[employeeType[i].id];
        }
    }
    return employeeNumber
}

// console.log(numberOfEmployeeWorking(time,employees,employeeType));

// 6. How many days of work needed to done all tasks ?

function daysOfWork(tasks) {
    let oneDayTime = 15; //TODO
    let totalTime = 0;
    for (var i = 0; i < tasks.length; i++) {
        taskTime = tasks[i].duration;
        totalTime += taskTime / 60;
    }
    finalTime = Math.ceil(totalTime / oneDayTime);
    return (finalTime)
}

// console.log(daysOfWork(tasks));