"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const startButtons = [
    document.getElementById("start-button"),
    document.getElementById("bottom-start-button")
  ];

  const developmentMessage = document.getElementById(
    "development-message"
  );

  const showDevelopmentMessage = () => {
    if (!developmentMessage) {
      return;
    }

    developmentMessage.textContent =
      "次の学習ページは現在作成中です。";

    developmentMessage.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  };

  startButtons.forEach((button) => {
    if (!button) {
      return;
    }

    button.addEventListener("click", showDevelopmentMessage);
  });
});
