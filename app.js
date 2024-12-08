
import chalk from "chalk";
import { calculator, factorial } from "./math.js";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const prompt = require('prompt-sync')();

function displayOperations()
{
    console.log(`
    + (Addition)
    - (Subtraction)
    * (Multiplication)
    / (Division)
    % (Modulo)
    ** (Exponent),
    fact (Factorial)
    sq (Square)
    sqrt (Square root)
    
    num (Change number)
    opt (Change operator)
    hist (Show history)
    del (Delete history)
    exit (Exit)
    `);
}

function getOperator()
{
    displayOperations();
    let op = chalk.blue(prompt("Enter an operator from the above list: "));
    return op;
}

let a = chalk.blue(Number(prompt("Enter the first operand: ")));
let b = chalk.blue(Number(prompt("Enter the second operand: ")));

let calcObject = new calculator(a, b);

while (true)
{
    calcObject.changeOperator(getOperator());

    if (op==="exit") break

    if (op=="hist")
        console.log(chalk.green(calcObject.getHistory()));

    else if (op=="del")
        console.log(chalk.red(calcObject.deleteHistory()));

    else if (op=="num")
    {
        let x = Number(prompt("Enter the new number: "));
        let option = prompt("Whether number is [1] First operand or [2] Second operand: ");
        if (option==1) calcObject.changeNumber(x, 1);
        if (option==2) calcObject.changeNumber(x, 2);
    }

    else if (op=="opt")
    {
        let newOp = prompt("Enter the new operator: ");
        calcObject.changeOperator(newOp);
    }
    else console.log(chalk.magenta(calcObject.operation()));
}

