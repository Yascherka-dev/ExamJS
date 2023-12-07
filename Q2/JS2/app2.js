let ht = document.getElementById("ht")
let opt1 = document.getElementById("opt1")
let opt2 = document.getElementById("opt2")
let opt3 = document.getElementById("opt3")
let opt4 = document.getElementById("opt4")
let tva = document.getElementById("tva")
let ttc = document.getElementById("ttc")

opt1.onclick = function () {
    let totalTva = Number((ht.value) * 2.1 / 100)
    let totalTtc = Number((ht.value) + Number(totalTva));
    console.log("totalTva")
    console.log("totalTtc")
    tva.innerHTML = totalTva;
    ttc.innerHTML = totalTtc;
}

opt2.onclick = function () {
    let totalTva = Number((ht.value) * 5.5 / 100)
    let totalTtc = Number((ht.value) + Number(totalTva));
    console.log("totalTva")
    console.log("totalTtc")
    tva.innerHTML = totalTva;
    ttc.innerHTML = totalTtc;
}

opt3.onclick = function () {
    let totalTva = Number((ht.value) * 10 / 100)
    let totalTtc = Number((ht.value) + Number(totalTva));
    console.log("totalTva")
    console.log("totalTtc")
    tva.innerHTML = totalTva;
    ttc.innerHTML = totalTtc;
}

opt4.onclick = function () {
    let totalTva = Number((ht.value) * 20 / 100)
    let totalTtc = Number((ht.value) + Number(totalTva));
    console.log("totalTva")
    console.log("totalTtc")
    tva.innerHTML = totalTva;
    ttc.innerHTML = totalTtc;
}
