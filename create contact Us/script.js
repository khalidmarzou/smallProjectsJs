// ________________variable aboutUs__________________

let aboutUs = document.getElementById("aboutUs");
let linkAboutUs = document.getElementById("linkAboutUs");
let btnClose = document.getElementById("btnClose");

// ___________________________________________________

// ________________variable contactUs__________________

let contactUs = document.getElementById("contactUs");
let linkContactUs = document.getElementById("linkContactUs");
let btnClose2 = document.getElementById("btnClose2");
// _______________________________________________

//------------on click AboutUs------------
linkAboutUs.addEventListener("click", () => {
  aboutUs.classList.remove("d-none");
  aboutUs.style.zIndex = "999";
  aboutUs.style.backdropFilter = "blur(10px)";
  contactUs.classList.add("d-none");
});
btnClose.addEventListener("click", () => {
  aboutUs.classList.add("d-none");
  


});
// _______________________________________________________

//------------on click contact US------------
linkContactUs.addEventListener("click", () => {
  contactUs.classList.remove("d-none");
  contactUs.style.zIndex = "999";
  aboutUs.classList.add("d-none");
});
btnClose2.addEventListener("click", () => {
  contactUs.classList.add("d-none");

});
// _______________________________________________________
