let modal = document.getElementById('modal-registration')
let regBtn = document.getElementById('open-modal-reg')
let inBtn = document.getElementById('open-modal-in')
let modalSignUp = document.getElementsByClassName('modal-sign-up')[0]
let modalSignIn = document.getElementsByClassName('modal-sign-in')[0]

regBtn.onclick = function() {
    modal.style.display = "block";
    modalSignIn.style.display = "none";
    modalSignUp.style.display = "block";
}
inBtn.onclick = function() {
  modal.style.display = "block";
  modalSignUp.style.display = "none";
  modalSignIn.style.display = "block";
}

function closeModal(){
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
      modal.style.display = "none";
  }
}