let aboutUs = document.getElementById("aboutUs");
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