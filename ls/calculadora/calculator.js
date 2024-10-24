const calculator = (operator, num1, num2) => {
    
    const validOperations = ["+", "-", "*", "/", "**", "%"];

    if (validOperations.includes(operator)) {
        switch (operator) {
            case "+":
                return num1 + num2;
            case "-":
                return num1 - num2;
            case "*":
                return num1 * num2;
            case "/":
                return num1 / num2;
            case "**":
                return num1 ** num2;
            case "%":
                return num1 % num2;
        }
    } else {
        return "Operação inválida";
    }
}

console.log(calculator("**", 2, 2))