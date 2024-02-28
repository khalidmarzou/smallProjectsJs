let aboutUs = document.getElementById("aboutUs");
let elemstn = document.body.children;
let linkAboutUs = document.getElementById("linkAboutUs");
let btnClose = document.getElementById("btnClose");
let contactUs = document.getElementById("contactUs");
let linkContactUs = document.getElementById("linkContactUs");
let btnClose2 = document.getElementById("btnClose2");
linkAboutUs.addEventListener("click", () => {
  aboutUs.classList.remove("d-none");
  aboutUs.style.zIndex = "999";
  contactUs.classList.add("d-none");
  console.log(elemstn);

  for (let k = 1; k <= elemstn.length; k++) {
    elemstn[k].classList.add("blur");
  }
});
btnClose.addEventListener("click", () => {
  aboutUs.classList.add("d-none");
  for (let i = 1; i <= elemstn.length; i++) {
    elemstn[i].classList.remove("blur");
  }
});

//------------on click contact US------------
linkContactUs.addEventListener("click", () => {
  contactUs.classList.remove("d-none");
  contactUs.style.zIndex = "999";
  aboutUs.classList.add("d-none");
  for (let k = 1; k <= elemstn.length; k++) {
    elemstn[k].classList.add("blur");
    if (k === 1) {
      elemstn[k].classList.remove("blur");
      continue;
    }
  }
});
btnClose2.addEventListener("click", () => {
  contactUs.classList.add("d-none");
  for (let i = 1; i <= elemstn.length; i++) {
    elemstn[i].classList.remove("blur");
  }
});
// _______________________________________________________
