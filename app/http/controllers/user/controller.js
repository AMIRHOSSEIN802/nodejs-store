const autoBind = require("auto-bind");

module.exports = class Controller {
    constructor(){
        autoBind(this)
    }
    tesrMethod(){
        return " test string "
    }
}