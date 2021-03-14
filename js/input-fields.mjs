import { convertReceived, convertSend } from "./conversion.mjs";

/*
 * Check for negative values and optionally trim number to 2 decimal places
 */
export function normalizeFields() {
    const sendInput = document.getElementById("send-input");
    var sendVal = sendInput.value;
    if (sendVal != "") {
        sendVal = parseFloat(sendVal);
        sendInput.value = sendVal < 0 ? "" : sendVal.toFixed(2);
    }

    const recvInput = document.getElementById("received-input");
    var recvVal = recvInput.value;
    if (recvVal != "") {
        recvVal = parseFloat(recvVal);
        recvInput.value = recvVal < 0 ? "" : recvVal.toFixed(2);
    }
}

export function updateSend() {
    var recvAmount = document.getElementById("received-input").value;
    document.getElementById("send-input").value = convertReceived({
        currencyCode: "GBP",
        recvAmount,
    });
    normalizeFields();
    // Reinitialize all the Materialize labels
    M.updateTextFields();
}

export function updateReceived() {
    var sendAmount = document.getElementById("send-input").value;
    document.getElementById("received-input").value = convertSend({
        currencyCode: "GBP",
        sendAmount,
    });
    normalizeFields();
    // Reinitialize all the Materialize labels
    M.updateTextFields();
}

export function disableInput() {
    document.getElementById("send-input").disabled = true;
    document.getElementById("received-input").disabled = true;
}
