var btn = document.querySelectorAll('.grid-item');
var input = document.querySelector('#result');

function evalExpression(expression) {
    try {
        let result = eval(expression);
        if (!isFinite(result)) {
            return "Cannot divide by zero";
        }
        return result;
    } catch (error) {
        return "Error";
    }
}

for (let item of btn) {
    item.addEventListener('click', function () {
    
        if (item.innerHTML == '=') {
            let result = evalExpression(input.value);
            input.value = result;
        } else if (item.innerHTML == 'C') {
            input.value = "";
        } else {
            input.value += item.innerHTML;
        }
        item.classList.toggle('clicked');
        
        setTimeout(() => {
            item.classList.remove('clicked');
        }, 2000);
    });
}
