// ハンバーガーメニューの開閉処理
const btn = document.querySelector(".btn-menu");
const nav = document.querySelector(".main-nav");

if (btn && nav) {
  btn.addEventListener("click", () => {
    nav.classList.toggle("open-menu");
    btn.innerHTML = btn.innerHTML === "Menu" ? "Close" : "Menu";
  });
}

// Luminous ギャラリー機能の呼び出し
const galleryElements = document.querySelectorAll(".grid-gallery");
if (galleryElements.length > 0 && typeof LuminousGallery !== "undefined") {
  new LuminousGallery(galleryElements);
}
const accordionQuestions = document.querySelectorAll(".accordion-question");

accordionQuestions.forEach((question) => {
  question.addEventListener("click", function () {
    // 矢印の反転
    question.classList.toggle("is-open");
    // 回答の開閉
    question.nextElementSibling.classList.toggle("is-open");
  });
});
