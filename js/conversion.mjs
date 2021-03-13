import normalizeInput from "./input.mjs";

export function convertSend() {
    var exRate = parseFloat(sessionStorage.getItem("GBP-ExRate"));
    var sendAmount = parseFloat(document.getElementById("send-input").value);

    document.getElementById("received-input").value = sendAmount * exRate;
    normalizeInput();
    M.updateTextFields();
}

export function convertReceived() {
    var exRate = parseFloat(sessionStorage.getItem("GBP-ExRate"));
    var recvAmount = parseFloat(
        document.getElementById("received-input").value
    );

    document.getElementById("send-input").value = recvAmount / exRate;
    normalizeInput();
    M.updateTextFields();
}
