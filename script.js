const openshare = document.querySelector(".openshare");
const share = document.querySelector(".sharebtn");
const sharebtn2 = document.querySelector(".sharebtn2");

share.addEventListener("click", () => {
    openshare.classList.toggle("clicked");
});

sharebtn2.addEventListener("click", () => {
    openshare.classList.remove("clicked");
});