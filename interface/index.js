function checkValue() {
    let checkedValue = document.querySelector('#active:checked');

    browser.storage.local.get().then(r => {
        console.log(r[0]);
        checkedValue.checked = r[0];
    })

    checkedValue.addEventListener('change', () => {
        let ticked = checkedValue.checked;
        const getVisited = browser.storage.local.get();
        getVisited.then(() => {
            const a = {};
            a[0] = ticked;
            browser.storage.local.set(a).catch(e => console.error(e));
        });
    });
}

document.addEventListener("DOMContentLoaded", checkValue);