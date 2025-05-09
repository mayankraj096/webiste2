// JavaScript placeholder
// Get the modal
var modal = document.getElementById("servicesModal");

// Get the button that opens the modal
var btn = document.querySelector(".open-modal-btn");

// Get the <span> element that closes the modal
var closeBtn = document.getElementById("closeModalBtn");

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function openModal(serviceId) {
    document.getElementById(serviceId).style.display = "block";
}

function closeModal(serviceId) {
    document.getElementById(serviceId).style.display = "none";
}
