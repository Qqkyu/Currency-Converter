export default function setFetchedExchangeRate(currencyCode) {
    /*
     * Takes in string argument "currencyCode" which is internationally accepted 3 letter acronym
     * Fetches current exchange rate for specified currency from NBP API
     * In case of successful API call, fetched exchange rate is saved in session storage using
     * naming convention: <currency code>-ExRate
     */
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
