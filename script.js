
function kalkulo() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var mod = document.getElementById("operation").value;

    if(mod == '+'){
        document.getElementById('result').style.color = "red";
        document.getElementById('result').value = eval(num1 + mod + num2);
    }else if( mod == '-'){
        document.getElementById('result').style.color = "green";
        document.getElementById('result').value = eval(num1 + mod + num2);
    }else if( mod == '*'){
        document.getElementById('result').style.color = "orange";
        document.getElementById('result').value = eval(num1 + mod + num2);
    }else{
        document.getElementById('result').style.color = "blue";
        document.getElementById('result').value = eval(num1 + mod + num2);
    }
    
  }