import { setFetchedExchangeRate } from "./exchange-rates.mjs";
import { updateReceived, updateSend } from "./input-fields.mjs";

// Initialize all of the Materialize Components
M.AutoInit();

document.addEventListener("DOMContentLoaded", () => {
    setFetchedExchangeRate("GBP");
});

document
    .getElementById("send-input")
    .addEventListener("change", updateReceived);
document
    .getElementById("received-input")
    .addEventListener("change", updateSend);
