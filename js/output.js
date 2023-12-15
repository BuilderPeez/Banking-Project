document.addEventListener('DOMContentLoaded', () => {
    var storedData = localStorage.getItem('formData');

    if (storedData) {
        var formData = JSON.parse(storedData);

        
        var acctName = document.getElementById('useId');
        var acctNo = document.getElementById('acct');
        acctName.innerHTML = formData.name
        acctNo.innerHTML = formData.acct
    }
})