// Check For Wallet Balance
async function checkBalance(WalletAdressse) {
    let balance = await window.ethereum.request({ method: "eth_getBalance",
        params: [
            WalletAdressse,
            'latest'
        ]
    }).catch((err)=> {
        console.log(err)
    })
    // fix the balance
    balance = parseFloat((balance)/Math.pow(10,18)).toFixed(2);
    localStorage.setItem('WalletBalance', balance);
}

// Check For Wallet Connected
async function makesureWalletConnected(WalletAdressse){
    if (window.location.href != 'http://127.0.0.1:8000/') {
        if(WalletAdressse !== 'None'){
            return true;
        }else{
            alert('Please connect your wallet');
            window.location.href = localStorage.getItem('Locationhref');
            return false;
        }
    }
};

// Get transaction history
async function getTransactionHistory(WalletAdressse){
    let transactionHistory = await window.ethereum.request({ method: "eth_getTransactionCount",
        params: [
            WalletAdressse,
            'latest'
        ]
    }).catch((err)=> {
        console.log(err)
    })
    return transactionHistory;
}

// Sign out from wallet
document.getElementById('signOut').addEventListener('click' , () => {
    window.userWalletAddress = "None";
    window.location.href = localStorage.getItem('Locationhref');
    localStorage.clear();
})

// onload function
window.addEventListener('DOMContentLoaded', () => {
    checkBalance(localStorage.getItem('userWalletAddress'));
    makesureWalletConnected(localStorage.getItem('userWalletAddress'));
})