const ratingsEls = document.querySelectorAll(".rating");
const btnEl = document.querySelector("#btn");
const containerEl = document.querySelector("#container");

ratingsEls.forEach((ratingEl) => {
  ratingEl.addEventListener("click", (e) => {
    removeActive ();
    e.target.classList.add("active");
    e.target.parentNode.classList.add("active");
    let selectedText = e.target.innerText || e.target.parentNode.innerText;
    btnEl.addEventListener("click", ()=>{
        
        containerEl.innerHTML= `
        <h1>Thank You!</h1> <br>
        <strong>Feedback:${selectedText}</strong><br>
        <p>We'll use your feedback to improve our customer support.`;
    })
  });
});



function removeActive(e) {
  ratingsEls.forEach((ratingEl) => {
    ratingEl.classList.remove("active");
  });
}

