import { setFetchedExchangeRate } from "./exchange-rates.mjs";
import { updateReceived, updateSend } from "./input-fields.mjs";

// Initialize all of the Materialize Components
M.AutoInit();

document.addEventListener("DOMContentLoaded", () => {
    setFetchedExchangeRate("GBP");
});

document.getElementById("send-input").addEventListener("blur", updateReceived);
document.getElementById("received-input").addEventListener("blur", updateSend);
