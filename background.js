chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "copyElementText",
    title: "Copy text from element",
    contexts: ["all"],
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "copyElementText") {
    chrome.tabs.sendMessage(tab.id, { action: "copy_element" });
  }
});
