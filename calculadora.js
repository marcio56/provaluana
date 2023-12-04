const mes   = document.querySelector('#ganhoMes');
const dias  = document.querySelector('#diasMes');
const horas = document.querySelector('#horasDia');
const resp  = document.querySelector('#resultado');

function calcule(){
    let valor = (mes.valueAsNumber/dias.valueAsNumber)/horas.valueAsNumber
    resp.textContent = valor;
}