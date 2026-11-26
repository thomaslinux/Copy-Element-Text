let lastRightClickedElement = null;

document.addEventListener(
  "contextmenu",
  (event) => {
    lastRightClickedElement = event.target;
  },
  true,
);

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "copy_element" && lastRightClickedElement) {
    const text =
      lastRightClickedElement.innerText || lastRightClickedElement.textContent;
    navigator.clipboard.writeText(text);
  }
});
