class Calculator: 
    
    operationsValids = ["+", "-", "*", "/", "**", "%", "//"]
    
    def __init__(self):
        self.historic = []
    
    def convert_operation(self, operation_number):
        if (operation_number == 1):
            return "+"
        elif (operation_number == 2):
            return "-"
        elif (operation_number == 3):
            return "*"
        elif (operation_number == 4):
            return "/"
        elif (operation_number == 5):
            return "**"
        elif (operation_number == 6):
            return "%"
        elif (operation_number == 7):
            return "//"
        else:
            return "Invalid"
    
    def operation(self, number1, number2, operation):
        if self.convert_operation(operation) not in self.operationsValids:
            print("Operação inválida")
            return
        
        operation = self.convert_operation(operation)
        result = 0;
        
        if operation == "+":
            result = number1 + number2
        elif operation == "-":
            result = number1 - number2
        elif operation == "*":
            result = number1 * number2
        elif operation == "/":
            result = number1 / number2
        elif operation == "**":
            result = number1 ** number2
        elif operation == "%":
            result = number1 % number2
        elif operation == "//":
            result = number1 // number2
        
        self.historic.append(f"{number1} {operation} {number2} = {result}")
        return result
    
    def isValidNumber(self, number):
        try:
            float(number)
            return True
        except ValueError:
            return False
        
if (__name__ == "__main__"):
    
    calc = Calculator()
    user_name = input("Seu nome: ")
    
    print(f"Seja bem-vindo {user_name}, escolha uma operação.")
    
    while(True):
        print('''
[1] Adição
[2] Subtração
[3] Multiplicação
[4] Divisão
[5] Exponenciação
[6] Resto da divição
[7] Divisão inteira
[0] Sair
        ''')
        
        operation = int(input("Operação: "))
        
        if (operation == 0):
            
            print("\nObrigado por usar o programa.\nSeu histórico de operações foi:\n")
            
            if (len(calc.historic) == 0):
                print("Nenhuma operação foi realizada.")
            else:
                for historic in calc.historic:
                    print(historic)
            
            break
        
        value = input("Valor: ")
        value2 = None
        
        if (len(value.split(' ')) == 2):

            values = value.split(" ")
            
            if (calc.isValidNumber(values[0]) and calc.isValidNumber(values[1])):
                value = float(values[0])
                value2 = float(values[1])
            else:
                print("Valores inválidos")
                break
        
        elif (len(value.split(' ')) == 1):
            
            values = value.split(" ")
            
            if (calc.isValidNumber(values[0])):
                value = float(values[0])
                
                value2 = input("Valor: ")
                if(calc.isValidNumber(value2)):
                    value2 = float(value2)
                
            else:
                print("Valores inválidos")
                break
            
        else:
            print("Informe apenas dois valores.")
            break
        
        print()
        result = calc.operation(value, value2, operation)
        print(f"Resultado: {value} {calc.convert_operation(operation)} {value2} = {result}")
        
        print('''
Deseja continuar?
[1] Sim
[2] Sair
              ''')
        
        is_continue = int(input("Operação: "))
        
        if (is_continue == 2):
            
            print("\nObrigado por usar o programa.\nSeu histórico de operações foi:\n")
            
            if (len(calc.historic) == 0):
                print("Nenhuma operação foi realizada.")
            else:
                for historic in calc.historic:
                    print(historic)
            
            break
        