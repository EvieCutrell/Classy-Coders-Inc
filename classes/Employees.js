class Employees {
  #salary;
  #isHired = true;
  static #allEmployees = [];

  constructor(name, title, salary) {
    this.name = name;
    this.title = title;
    this.#salary = salary;
    Employees.#allEmployees.push(this);
  }
  getSalary() {
    return this.#salary;
  }

  setSalary(amount) {
    this.#salary = amount;
  }

  getStatus() {
    return this.#isHired;
  }

  setStatus(command) {
    if (command === "fire") {
      this.#isHired = false;
    } else {
      this.#isHired = true;
    }
  }

  static getEmployees() {
    return Employees.#allEmployees;
  }

  static getTotalPayroll() {
    let total = 0;
    Employees.#allEmployees.forEach((e) => {
      let tempSalary = e.getSalary();
      total += tempSalary;
    });
    return total;
  }
}

module.exports = {
  Employees,
};
