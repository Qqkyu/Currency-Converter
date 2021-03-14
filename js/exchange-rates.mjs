import { disableInput } from "./input-fields.mjs";

/*
 * Takes in a string argument "currencyCode" which is an internationally
 * accepted 3 letter acronym;
 * Fetches current exchange rate for specified currency from NBP API;
 * In case of a successful API call, the fetched exchange rate is saved in
 * a session storage using naming convention: <currency code>-ExRate;
 */
export function setFetchedExchangeRate(currencyCode) {
    const URL = `http://api.nbp.pl/api/exchangerates/rates/a/${currencyCode}/?format=json`;

    fetch(URL)
        .then((response) => response.json())
        .then(function extractExchangeRate({
            rates: [
                { 
                    mid: exchangeRate
                }
            ] = []
        } = {}) {
            sessionStorage.setItem(`${currencyCode}-ExRate`, exchangeRate.toFixed(2));
        }).catch(() => {
            console.log("Failed to fetch data from NBP API.");
        });
}

/*
 * Takes in a string argument "currencyCode" which is an internationally
 * accepted 3 letter acronym;
 * Checks whether <currencyCode>-ExRate is set in sessionStorage, if so
 * information about exchange rate is displayed, otherwise use toast to
 * inform user about failure;
 */
export function displayExchangeRate(currencyCode) {
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
