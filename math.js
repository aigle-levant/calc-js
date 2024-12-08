
//containing calculator class
export { calculator, factorial };

class calculator
{
    constructor(operandOne, operandTwo)
    {
        this.operandOne = operandOne;
        this.operandTwo = operandTwo;
        this.operator = "";
        this.history = [];
    }

    getHistory()
    {
        return this.history;
    }

    changeNumber(num, pos)
    {
        if (pos==1) this.operandOne = num;
        else (pos==2)
            this.operandTwo = num;
    }

    changeOperator(operatorSymbol)
    {
        this.operator = operatorSymbol;
    }

    deleteHistory()
    {
        this.history = 0;
        console.log("Deleted history.");
        return this;
    }
    operation()
    {
        switch(this.operator)
        {
            case '+':
                this.history.push(`${this.operandOne} + ${this.operandTwo}`);
                return (this.operandOne + this.operandTwo);
            case '-':
                this.history.push(`${this.operandOne} - ${this.operandTwo}`);
                return (this.operandOne - this.operandTwo);
            case '*':
                this.history.push(`${this.operandOne} * ${this.operandTwo}`);
                return (this.operandOne * this.operandTwo);
            case '/':
                if (this.operandTwo===0) return ("Cannot divide by zero");
                else
                {
                    this.history.push(`${this.operandOne} / ${this.operandTwo}`);
                    return (this.operandOne/this.operandTwo);
                }
            case '**':
                this.history.push(`${this.operandOne} ** ${this.operandTwo}`);
                return(Math.pow(this.operandOne, this.operandTwo));
            case '%':
                this.history.push(`${this.operandOne} % ${this.operandTwo}`);
                return(this.operandOne%this.operandTwo);
            case 'sq':
                this.history.push(`${this.operandOne} * ${this.operandOne}`);
                return(Math.pow(this.operandOne, 2));
            case 'sqrt':
                this.history.push(`Square root : ${this.operandOne}`);
                return (Math.sqrt(this.operandOne));
            case 'fact':
                this.history.push(`Factorial : ${this.operandOne}`);
                return factorial(this.operandOne);
        }
    }
}

function factorial(number)
{
    if (number<=1) return 1
    else return (number * factorial(number-1));
}