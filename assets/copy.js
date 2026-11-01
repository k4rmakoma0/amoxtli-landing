document.querySelectorAll("[data-copy]").forEach((button) => {
  const label = button.textContent;
  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(button.dataset.copy);
      button.textContent = button.dataset.copied;
    } catch {
      button.textContent = button.dataset.failed;
    }
    setTimeout(() => { button.textContent = label; }, 1800);
  });
});

const languages = document.querySelector(".languages");
document.addEventListener("click", (event) => {
  if (languages && !languages.contains(event.target)) languages.open = false;
});
document.addEventListener("keydown", (event) => {
  if (languages?.open && event.key === "Escape") {
    languages.open = false;
    languages.querySelector("summary").focus();
  }
});
