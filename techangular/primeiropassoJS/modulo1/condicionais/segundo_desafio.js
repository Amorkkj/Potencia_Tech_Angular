let preçoEtanol = 2.93;
let preçoGasolina = 5.51;
let carroEtanolOuGasolina = "Gasolina";
let combustivelGastoKM = 10;
let distanciaViagemKm = 100;

if (carroEtanolOuGasolina === "Etanol") {
    let precoGasto = (distanciaViagemKm / combustivelGastoKM) * preçoEtanol;
    console.log("Em uma viagem de: " + distanciaViagemKm + "KM, Ira necessitar de: R$" + precoGasto + " para realizar a viagem.");
} else if (carroEtanolOuGasolina === "Gasolina") {
    let precoGasto = (distanciaViagemKm / combustivelGastoKM) * preçoGasolina;
    console.log("Em uma viagem de: " + distanciaViagemKm + "KM, Ira necessitar de: R$" + precoGasto.toFixed(2) + " para realizar a viagem.");
} else {
    console.log("Tipo de combustivel não aceito.");
}

