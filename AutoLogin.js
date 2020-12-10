browser.storage.local.get().then(r => {
    console.log('Trying to log in....');
    if(r[0]) {
        document.getElementById('loginbtn').click();
    }
})

