export default function normalizeInput() {
    const sendInput = document.getElementById("send-input");
    const sendVal = sendInput.value;
    if (sendVal != "") {
        sendInput.value = parseFloat(sendVal).toFixed(2);
    }

    const recvInput = document.getElementById("received-input");
    const recvVal = recvInput.value;
    if (recvVal != "") {
        recvInput.value = toString(parseInt(recvVal).toFixed(2));
    }
}
