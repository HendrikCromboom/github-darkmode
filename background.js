chrome.tabs.onActivated.addListener(tab => {
    chrome.tabs.get(tab.tabId, current_tab_info => {
        console.log(current_tab_info.url)
        if (/^https:\/\/github/.test(current_tab_info.url)){
            chrome.tabs.executeScript(null, {file: "./foreground.js"}, () => console.log("foreground injected"))
        }
        });
});
chrome.tabs.onUpdated.addListener(tab => {
    chrome.tabs.get(tab.tabId, current_tab_info => {
        console.log(current_tab_info.url)
        if (/^https:\/\/github/.test(current_tab_info.url)){
            chrome.tabs.executeScript(null, {file: "./foreground.js"}, () => console.log("foreground injected"))
        }
    });
});