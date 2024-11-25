const indexPage = document.querySelector(".index");
if (indexPage) {
  const burgerMenuList = document.querySelector(".nav__list");
  const burgerAddMenu = document.querySelector(".content__btns");
  const burgerAddMenuChildren = [...burgerAddMenu.children];

  let burgerFull = false;
  const burgerItems = [];

  function getMenuItem(el) {
    const item = document.createElement("li");
    item.classList.add("nav__item");
    item.append(el);

    return item;
  }

  function transferBurgerItem() {
    if (window.innerWidth <= 768 && !burgerFull) {
      burgerAddMenuChildren.forEach((el) => {
        el.remove();
        const item = getMenuItem(el);
        burgerItems.push(item);
        burgerMenuList.append(item);
      });
      burgerFull = true;
    } else if (window.innerWidth > 768) {
      burgerItems.forEach((el) => {
        el.remove();
      });
      burgerAddMenuChildren.forEach((el) => {
        el.remove();
        burgerAddMenu.append(el);
      });
      burgerFull = false;
    }
  }

  transferBurgerItem();

  window.addEventListener("resize", (e) => {
    transferBurgerItem();
  });
}

const conferencePage = document.querySelector(".conference");
if (conferencePage) {
  const headerConference = document.querySelector(".header__conference");
  const conferenceBtns = headerConference.querySelector(".conference__btns");
  const transferBtns = conferenceBtns.querySelectorAll(".header__conference-btn");
  const toTransferBtn = headerConference.querySelector(".header__conference-btns");

  function transferConferenceBtns() {
    if (window.innerWidth <= 930) {
      transferBtns.forEach((btn) => {
        btn.remove();
        toTransferBtn.append(btn);
      });
    } else {
      transferBtns.forEach((btn) => {
        btn.remove();
        conferenceBtns.append(btn);
      });
    }
  }

  function transferBannerElements() {
    const transferTo = headerConference.querySelector(".header-banner");
    const beforeDate = headerConference.querySelector(".conference__description");
    const date = headerConference.querySelector(".conference__date");
    const description = headerConference.querySelector(".header__conference-description");
    const afterDescription = headerConference.querySelector(".header__conference-btns");

    if (window.innerWidth <= 768) {
      date.remove();
      transferTo.append(date);
      description.remove();
      transferTo.append(description);
    } else {
      date.remove();
      description.remove();
      beforeDate.after(date);
      afterDescription.before(description);
    }
  }

  transferConferenceBtns();
  transferBannerElements();

  window.addEventListener("resize", (e) => {
    transferConferenceBtns();
    transferBannerElements();
  });
}
