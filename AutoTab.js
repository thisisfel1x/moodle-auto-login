browser.storage.local.get().then(r => {
    console.log('Trying to close the window...');
    if(r[0]) {
        window.close();
    }
})