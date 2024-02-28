let aboutUs = document.getElementById("aboutUs");
<<<<<<< HEAD
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
=======
let elemstn = document.body.children;
      let linkAboutUs = document.getElementById("linkAboutUs");
      let btnClose = document.getElementById("btnClose");
      linkAboutUs.addEventListener("click", () => {
        aboutUs.classList.remove("d-none");
        aboutUs.style.zIndex = "999";
        
          for (let k=1 ; k<= elemstn.length; k++){
          elemstn[k].classList.add("blur");
        }
        
      });
      btnClose.addEventListener("click", () => {
        aboutUs.classList.add("d-none");
        for (let i=1 ; i<= elemstn.length; i++){
          elemstn[i].classList.remove("blur");
        }
      });

console.log(elemstn)
>>>>>>> 2fedb2b6a9c56744cc6bef235477464b5464e54a
