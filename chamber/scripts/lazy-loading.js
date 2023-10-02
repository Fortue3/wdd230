const images = document.querySelectorAll("[data-src]")

function preloadImage(img) {
  const src = img.getAttribute("date-src")
  if(!src) {
    return;
  }

  img.src = src
}

const imageOptions = {
  threshold: 0,
  rootMargin: "0px 0px -50px 0px",
}

const imgObserver = new IntersectionObserver((entries, imgObserver) =>{
  entries.forEach(entry => {
    // console.log(entry.target)

    if(!entry.isIntersecting) {
      return;
    } else {
      // preloadImage(entry.target)
      const src = entry.target.getAttribute("data-src")
      entry.target.setAttribute('src', src)
      imgObserver.unobserve(entry.target)
    }
  })
}, imageOptions)

images.forEach(image => {
  imgObserver.observe(image)
})
