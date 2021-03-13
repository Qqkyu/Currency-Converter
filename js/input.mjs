export default function normalizeInput() {
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
