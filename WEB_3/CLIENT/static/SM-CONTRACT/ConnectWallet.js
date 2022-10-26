window.userWalletAddress = 'None'

// Check is metamask is installed
function checkInstalled() {
    if (typeof window.ethereum == 'undefined') {
        alert('MetaMask is not installed');
        return false
    }
    document.getElementById('connectWallet').addEventListener('click', connectWalletwithMetaMask)
}

// connect wallet with metamask
async function connectWalletwithMetaMask() {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
    .catch((e) => {
        console.error(e.message)
        return
    })

    if (!accounts) { return }

    window.userWalletAddress = accounts[0]
    localStorage.setItem('userWalletAddress', window.userWalletAddress)
    localStorage.setItem('Locationhref', window.location.href)
    window.location.href += "dashboard/";
}

// onload function
window.addEventListener('DOMContentLoaded', () => {
    checkInstalled();
})