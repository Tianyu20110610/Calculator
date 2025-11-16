function calc(){
    let num1 = Number(document.getElementById('num1').value)
    let num2 = Number(document.getElementById('num2').value)
    let op = document.getElementById('operators').value
    let result = 0
    if(op == 'add'){
      result = num1 + num2
    }
    else if (op == 'sub' )
      result = num1 - num2
    else if (op == 'mul' )
      result = num1 * num2
    else if (op == 'div' )
      result = num1 / num2
    else if (op == 'ex')
      result = num1 ** num2
    else if (op == 'mod')
      result = num1 % num2
    document.getElementById('result').innerHTML = result
  }
  
