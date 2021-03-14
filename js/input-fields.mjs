import { convertReceived, convertSend } from "./conversion.mjs";

/*
 * Get received amount, convert it and display resul in send input;
 * Send information through toast in case of invalid input
 */
export function updateSend() {
    var recvAmount = document.getElementById("received-input").value;
    var sendAmount = convertReceived({
        currencyCode: "GBP",
        recvAmount,
    });

    document.getElementById("send-input").value = sendAmount;
    // Reinitialize all the Materialize labels
    M.updateTextFields();

    if (sendAmount != "") {
        normalizeFields();
    } else {
        M.toast({
            html: "Invalid received amount",
            classes: "rounded",
        });
    }
}

/*
 * Get send amount, convert it and display resul in received input;
 * Send information through toast in case of invalid input.
 */
export function updateReceived() {
    var sendAmount = document.getElementById("send-input").value;
    var recvAmount = convertSend({
        currencyCode: "GBP",
        sendAmount,
    });

    document.getElementById("received-input").value = recvAmount;
    // Reinitialize all the Materialize labels
    M.updateTextFields();

    if (recvAmount != "") {
        normalizeFields();
    } else {
        M.toast({
            html: "Invalid send amount",
            classes: "rounded",
        });
    }
}

export function disableInput() {
    document.getElementById("send-input").disabled = true;
    document.getElementById("received-input").disabled = true;
}

/*
 * Check for negative values and optionally trim number to 2 decimal places
 */
function normalizeFields() {
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
