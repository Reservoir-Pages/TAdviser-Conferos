const reportPage = document.querySelector(".main.report");

if (reportPage) {
  const transferAfterTo = reportPage.querySelector(".section.participants");
  const transferAfterFrom = reportPage.querySelector(".report__content");

  function transferAside(to) {
    const aside = reportPage.querySelector(".report__aside");

    aside.remove();
    to.after(aside);
  }

  if (window.innerWidth <= 768) {
    transferAside(transferAfterTo);
  } else {
    transferAside(transferAfterFrom);
  }

  window.addEventListener("resize", (e) => {
    e.preventDefault();

    if (window.innerWidth <= 768) {
      transferAside(transferAfterTo);
    } else {
      transferAside(transferAfterFrom);
    }
  });
}
