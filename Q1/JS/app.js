let yardsValue = document.getElementById("yardsValue");
let btnConvert = document.getElementById("btnConvert");
let result = document.getElementById("result");



btnConvert.onclick = function () {
    let total = Number((yardsValue.value) * 0.9144);
    console.log(total);
    result.innerHTML = total;
};