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
}

// Check For Wallet Connected
async function makesureWalletConnected(WalletAdressse) {
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

// Sign out from wallet
document.getElementById('signOut').addEventListener('click' , () => {
    window.userWalletAddress = "None";
    window.location.href = localStorage.getItem('Locationhref');
    localStorage.setItem('userWalletAddress', 'None');
})

// onload function
window.addEventListener('DOMContentLoaded', () => {
    checkBalance(localStorage.getItem('userWalletAddress'));
    makesureWalletConnected(localStorage.getItem('userWalletAddress'));
})