const {Employees} = require("./Employees")

class SoftwareEngineer extends Employees{
    #programmingLanguages;

    constructor(name, title, salary, langArr){
        super(name, title, salary);
        this.#programmingLanguages = langArr;
    }

    getProgrammingLanguages(){
        return this.#programmingLanguages;
    }

    setProgrammingLanguages(language){
        this.#programmingLanguages.push(language);
    }
 
}

module.exports = {
    SoftwareEngineer,
}