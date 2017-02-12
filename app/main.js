// Get the modal
const modal = document.getElementById('myModal');

// Get the button that opens the modal
const button = document.getElementById('myBtn');

// Overlay for behind the modal
const overlay = document.getElementById('myOverlay');

// When the user clicks on the button, open the modal
button.onclick = () => {
  modal.style.display = 'block';
  overlay.style.display = 'block';
};

// When the user clicks anywhere outside of the modal, close it
document.onclick = (e) => {
  if (e.target.id === 'myOverlay') {
    modal.style.display = 'none';
    overlay.style.display = 'none';
  }
};

