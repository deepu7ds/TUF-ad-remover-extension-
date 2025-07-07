const removeAdAndResize = () => {
  const adDiv = document
    .querySelector('div > button > img[src*="takeuforward.org/content/"]')
    ?.closest("div");

  if (adDiv) {
    const parent = adDiv.parentElement;
    adDiv.remove();
    parent.querySelectorAll(":scope > div, :scope > section").forEach((el) => {
      el.style.width = "100%";
    });
    console.log("Ad removed and layout adjusted");
  }
};

window.addEventListener("load", () => {
  const observer = new MutationObserver(() => removeAdAndResize());
  observer.observe(document.body, { childList: true, subtree: true });
});
