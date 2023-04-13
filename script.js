let expression = prompt('Введите выражение');

const regex = /[^()0123456789+\-*/]/i;

if (regex.test(expression) === false) {
    alert(eval(expression));
} else {
    alert("Неправильное выражение");
}