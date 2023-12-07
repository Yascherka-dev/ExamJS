let ht = document.getElementById("ht")
let opt1 = document.getElementById("opt1")
let opt2 = document.getElementById("opt2")
let opt3 = document.getElementById("opt3")
let opt4 = document.getElementById("opt4")
let tva = document.getElementById("tva")
let ttc = document.getElementById("ttc")

opt1.onclick = function () {
    tva.innerHTML = Number((ht.value) * 2.1 / 100);
    ttc.innerHTML = Number((ht.value) * (2.1 / 100) + Number(ht.value));
}

opt2.onclick = function () {
    tva.innerHTML = Number((ht.value) * 5.5 / 100);
    ttc.innerHTML = Number((ht.value) * (5.5 / 100) + Number(ht.value));
}

opt3.onclick = function () {
    tva.innerHTML = Number((ht.value) * 10 / 100);
    ttc.innerHTML = Number((ht.value) * (10 / 100) + Number(ht.value));
}

opt4.onclick = function () {
    tva.innerHTML = Number((ht.value) * 20 / 100)
    ttc.innerHTML = Number((ht.value) * (20 / 100) + Number(ht.value));
}
