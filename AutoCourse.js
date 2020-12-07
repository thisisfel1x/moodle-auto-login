console.log(document.getElementsByClassName('list-group-item list-group-item-action'))

let sidebarItems = document.getElementsByClassName('list-group-item list-group-item-action');

for (let i = 4; i < sidebarItems.length; i++) {
    const currentItem = sidebarItems[i];
    window.open(currentItem.href);
}