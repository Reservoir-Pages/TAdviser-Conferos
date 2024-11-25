const tabsContainer = document.querySelector(".tabs");
if (tabsContainer) {
  const tabBtns = tabsContainer.querySelectorAll(".terms__tabs-btn");
  const tabPanels = tabsContainer.querySelectorAll(".tabs__panel");

  tabBtns.forEach((tabBtn) => {
    tabBtn.addEventListener("click", (e) => {
      e.preventDefault();

      const path = tabBtn.getAttribute("data-path");

      tabBtns.forEach((tabBtn) => {
        tabBtn.classList.remove("terms__tabs-btn--active");
      });

      tabPanels.forEach((tabPanel) => {
        tabPanel.classList.remove("tabs__panel--active");

        if (tabPanel.getAttribute("data-target") === path) {
          tabPanel.classList.add("tabs__panel--active");
        }
      });

      tabBtn.classList.add("terms__tabs-btn--active");
    });
  });
}
