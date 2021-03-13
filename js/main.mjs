import setFetchedExchangeRate from "./exchange-rates.mjs";

function displayExchangeRate(currencyCode) {
    var exRate = sessionStorage.getItem(`${currencyCode}-ExRate`);

    if (exRate == null) {
    } else {
        document.getElementById(
            "exchange-rate-info"
        ).innerHTML = `1 ${currencyCode} = <strong>${exRate} PLN</strong>`;
    }

    document
        .getElementById("exchange-rate-info-cont")
        .classList.add("scale-in");
}

window.addEventListener("DOMContentLoaded", function () {
    setFetchedExchangeRate("GBP");
    displayExchangeRate("GBP");
});
