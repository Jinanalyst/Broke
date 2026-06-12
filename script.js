const copyButton = document.querySelector("#copy-ca");

if (copyButton) {
  copyButton.addEventListener("click", async () => {
    const ca = copyButton.dataset.ca || copyButton.textContent.trim();

    try {
      await navigator.clipboard.writeText(ca);
      const original = copyButton.textContent;
      copyButton.textContent = "Copied!";
      setTimeout(() => {
        copyButton.textContent = original;
      }, 1400);
    } catch (error) {
      copyButton.textContent = "Copy failed";
      setTimeout(() => {
        copyButton.textContent = ca;
      }, 1400);
    }
  });
}
