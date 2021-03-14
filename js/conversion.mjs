/*
 * Takes in an object with two (optional) string arguments: "currencyCode"
 * which is an internationally accepted 3 letter acronym and sendAmount;
 * If exchange rate is set for passed-in currency in sessionStorage and
 * passed-in sendAmount is not an empty string, then returns calculated
 * received amount, otherwise an empty string.
 */
export function convertSend({
    currencyCode = "GBP",
    sendAmount = ""
}) {
    var exRate = sessionStorage.getItem(`${currencyCode}-ExRate`);
    if(exRate != null && sendAmount != "") {
        const recvAmount = parseFloat(sendAmount) * parseFloat(exRate);
        return recvAmount.toString();
    }
    else {
        return "";
    }
}

/*
 * Takes in an object with two (optional) string arguments: "currencyCode"
 * which is an internationally accepted 3 letter acronym and recvAmount;
 * If exchange rate is set for passed-in currency in sessionStorage and
 * passed-in recvAmount is not an empty string, then returns calculated
 * send amount, otherwise an empty string.
 */
export function convertReceived({
    currencyCode = "GBP",
    recvAmount = ""
}) {
    var exRate = sessionStorage.getItem(`${currencyCode}-ExRate`);
    if (exRate != null && recvAmount != "") {
        const sendAmount = parseFloat(recvAmount) * parseFloat(exRate);
        return sendAmount.toString();
    } else {
        return "";
    }
}
