const scrollToTop = document.querySelector('.scrollbtn');

window.addEventListener('scroll', checkHeight)

function checkHeight(){
  if(window.scrollY > 200) {
    scrollToTop.style.display = "flex"
  } else {
    scrollToTop.style.display = "none"
  }
}

scrollToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
})


const hamburger = document.querySelector(".hamburger");
const links = document.querySelector(".links");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	links.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
	hamburger.classList.remove("active");
	links.classList.remove("active");
}))