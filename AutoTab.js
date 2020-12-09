document.addEventListener("DOMContentLoaded", listTabs);

function getCurrentWindowTabs() {
    return browser.tabs.query({currentWindow: true});
}

function listTabs() {
    console.log("debug");
    getCurrentWindowTabs().then((tabs) => {
        console.log(tabs.toString())
    });
}

