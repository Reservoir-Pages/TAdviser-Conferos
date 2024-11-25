let hash = window.location.hash.split("#")[1];

function toHash(hash) {
  setTimeout(() => {
    const btn = document.querySelector(`[data-path='${hash}']`);
    if (btn) btn.click();
  }, 1);
}

if (hash) {
  toHash(hash);
}

window.addEventListener("popstate", function () {
  hash = window.location.hash.split("#")[1];
  toHash(hash);
});
