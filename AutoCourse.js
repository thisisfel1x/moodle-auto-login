browser.storage.local.get().then(r => {
    console.log('Trying to open all courses in a new tab...');
    if(r[0]) {
        let sidebarItems = document.getElementsByClassName('list-group-item list-group-item-action');

        for (let i = 4; i < sidebarItems.length; i++) {
            const currentItem = sidebarItems[i];
            window.open(currentItem.href);
        }
    }
})