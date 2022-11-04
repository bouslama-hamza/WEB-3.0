async function sendTransaction(){

    const params = {
        "from": document.getElementById('SenderAddress').value,
        "to": document.getElementById('ReceiverAddress').value,
        "value":Number((document.getElementById('TransactionAmount').value)*Math.pow(10,18)).toString(16) ,
        "gas": Number(21000).toString(16),
        "gasPrice": Number(2500000).toString(16),
    }

    console.log(params);

    let result = await window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [params],
    }).catch((err) => {
        alert(err.message);
    });

}

// Send Transaction
document.getElementById('sendTransaction').addEventListener('click', () => {
    sendTransaction();
})