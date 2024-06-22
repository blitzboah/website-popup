chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url) {
    chrome.storage.sync.get(['websites'], function(result) {
      const websites = result.websites || [];
      if (websites.some(site => tab.url.startsWith(site))) {
        chrome.tabs.executeScript(tabId, {file: 'content.js'});
      }
    });
  }
});