import {
    setFetchedExchangeRate,
    displayExchangeRate,
} from "./exchange-rates.mjs";
import { updateReceived, updateSend } from "./input-fields.mjs";

// Initialize all of the Materialize Components
M.AutoInit();

window.addEventListener("DOMContentLoaded", function () {
    setFetchedExchangeRate("GBP");
    displayExchangeRate("GBP");
});

document.getElementById("send-input").addEventListener("blur", updateReceived);
document.getElementById("received-input").addEventListener("blur", updateSend);
