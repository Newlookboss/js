function createTabs(containerSelector) {
  const container = document.querySelector(containerSelector);
  const tabs = container.querySelectorAll(".tabs .item");
  const contents = container.querySelectorAll(".content .content-item");

  function showContent(index) {
    contents.forEach((content, i) => {
      if (i === index) {
        content.style.display = "block";
        tabs[i].classList.add("active");
      } else {
        content.style.display = "none";
        tabs[i].classList.remove("active");
      }
    });
  }

  showContent(0);

  tabs.forEach((tab, i) => {
    tab.addEventListener("click", () => {
      showContent(i);
    });
  });
}

createTabs("#container");
