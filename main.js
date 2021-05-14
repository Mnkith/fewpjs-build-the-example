// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

const hearts = document.getElementsByClassName("like-glyph");
for (const heart of hearts) {
  heart.addEventListener("click", doClick);
}

function toggleHeart(e) {
  if (e.target.innerText == FULL_HEART) {
    e.target.className = 'like-glyph'
    e.target.innerText = EMPTY_HEART
  } else {
    e.target.className = 'like-glyph activated-heart'
    e.target.innerText = FULL_HEART
  }
}
function doClick(e){
mimicServerCall()
.then(toggleHeart(e))
.catch((err) => {
  errModal = document.getElementById('modal')
  document.getElementById("modal-message").innerText = err
  errModal.className = ''
  setTimeout(() => { document.getElementById('modal').className = 'hidden'}, 3000)
})
}


// })

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
