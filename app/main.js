// Get the modal
const modal = document.getElementById('myModal');

// Get the button that opens the modal
const btn = document.getElementById('myBtn');

const overlay = document.getElementById("myOverlay");

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = 'block';
  overlay.style.display = "block";
};

// When the user clicks anywhere outside of the modal, close it
document.onclick = function(e) {
  if (e.target.id === 'myOverlay') {
    modal.style.display = 'none';
     overlay.style.display = "none";
  }
};

