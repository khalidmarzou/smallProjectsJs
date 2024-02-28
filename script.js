let aboutUs = document.getElementById("aboutUs");
let linkAboutUs = document.getElementById("linkAboutUs");
let btnClose = document.getElementById("btnClose");
linkAboutUs.addEventListener("click", () => {
  aboutUs.classList.remove("d-none");
  aboutUs.style.zIndex = "999";
  aboutUs.style.backdropFilter = "blur(10px)";
});
btnClose.addEventListener("click", () => {
  aboutUs.classList.add("d-none");
});
