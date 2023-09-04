const NavbarE1 = document.querySelector(".Navbar");

const bottomContainerEl = document.querySelector(".bottom-container");


console.log(NavbarE1.offsetHeight);
console.log(bottomContainerEl.offsetTop);

window.addEventListener("scroll", () => {
         
    if (
        window.scrollY >
        bottomContainerEl.offsetTop - NavbarE1.offsetHeight - 550
      ) {
        NavbarE1.classList.add("active");
      } else {
        NavbarE1.classList.remove("active");
      }
    

});
