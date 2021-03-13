import setFetchedExchangeRate from "./exchange-rates.mjs";
import normalizeInput from "./input.mjs";

M.AutoInit();

function disableInput() {
    document.getElementById("send-input").disabled = true;
    document.getElementById("received-input").disabled = true;
}

function displayExchangeRate(currencyCode) {
    var exRate = sessionStorage.getItem(`${currencyCode}-ExRate`);

    if (exRate == null) {
        // Failed API call, notify user and disable input
        const msg = `Failed to fetch exchange rate for ${currencyCode}`;
        M.toast({
            html: msg,
            classes: "rounded",
        });
        document.getElementById("exchange-rate-info-cont").innerHTML = msg;
        disableInput();
    } else {
        // Successful API call, display current exchange rate
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

document.getElementById("send-input").addEventListener("blur", normalizeInput);
document
    .getElementById("received-input")
    .addEventListener("blur", normalizeInput);
