/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
// Implement a time card system; employee insert card when they enter and punch out when they leave;
// Record-orirnted programming in JS


function createEmployeeRecord(record) {
  return {
      firstName: record[0],
      familyName: record[1],
      title: record[2],
      payPerHour: record[3],
      timeInEvents: [],
      timeOutEvents: []
  };
}

function createEmployeeRecords(records) {
  return records.map(createEmployeeRecord);
}

function createTimeInEvent(date) {
  const [day, hour] = date.split(" ");
  const [year, month, dayOfMonth] = day.split("-");
  const timeInEvent = {
      type: "TimeIn",
      date: `${year}-${month}-${dayOfMonth}`,
      hour: parseInt(hour, 10),
  };
  this.timeInEvents.push(timeInEvent);
  return this;
}

function createTimeOutEvent(date) {
  const [day, hour] = date.split(" ");
  const [year, month, dayOfMonth] = day.split("-");
  const timeOutEvent = {
      type: "TimeOut",
      date: `${year}-${month}-${dayOfMonth}`,
      hour: parseInt(hour, 10),
  };
  this.timeOutEvents.push(timeOutEvent);
  return this;
}

function hoursWorkedOnDate(date) {
  const timeInEvent = this.timeInEvents.find(event => event.date === date);
  const timeOutEvent = this.timeOutEvents.find(event => event.date === date);

  if (timeInEvent && timeOutEvent) {
      const hoursWorked = (timeOutEvent.hour - timeInEvent.hour) / 100;
      return Math.abs(hoursWorked);
  } else {
      return 0;
  }
}

function wagesEarnedOnDate(date) {
  const hoursWorked = hoursWorkedOnDate.call(this, date);
  return Math.round(hoursWorked * this.payPerHour);
}

function allWagesFor() {
  const allDates = this.timeInEvents.map(event => event.date);
  return allDates.reduce((totalWages, date) => totalWages + wagesEarnedOnDate.call(this, date), 0);
}

function findEmployeeByFirstName(collection, firstNameString) {
  return collection.find(employee => employee.firstName === firstNameString);
}

function calculatePayroll(employeeRecords) {
  return employeeRecords.reduce((totalPayroll, employee) => totalPayroll + allWagesFor.call(employee), 0);
}

