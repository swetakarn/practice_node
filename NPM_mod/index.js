const chalk =require("chalk");
//console.log(chalk.blue("helllo world.."));

const validator=require("validator");
const res=validator.isEmail("swetakarn47@gmail.com");
console.log(res? chalk.green.inverse(res) : chalk.red.inverse(res));